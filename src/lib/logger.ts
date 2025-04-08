declare const EdgeRuntime: string;

type LogLevel = 'info' | 'warn' | 'error' | 'debug';
type LogContext = { status?: number; duration?: number; [key: string]: any };

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context: LogContext;
}

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  // Text colors
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  // Background colors
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
};

const levelColors: Record<LogLevel, string> = {
  info: colors.blue,
  warn: colors.yellow,
  error: colors.red,
  debug: colors.magenta,
};

const statusColors: Record<string, string> = {
  '2': colors.green,
  '3': colors.cyan,
  '4': colors.yellow,
  '5': colors.red,
};

// Add this after the existing color definitions
const prettyJson = (obj: any): string => {
  try {
    return JSON.stringify(obj, null, 2)
      .split('\n')
      .map((line, i) => (i === 0 ? line : `${' '.repeat(2)}${line}`))
      .join('\n')
      .replace(/"([^"]+)":/g, `${colors.dim}$1:${colors.reset}`);
  } catch {
    return String(obj);
  }
};

// Format duration with color based on threshold
const formatDuration = (duration?: number) => {
  if (!duration) return '';
  const ms = Math.round(duration * 100) / 100;

  if (ms < 100) return `${colors.green}${ms}ms${colors.reset}`;
  if (ms < 1000) return `${colors.yellow}${ms}ms${colors.reset}`;
  return `${colors.red}${ms}ms${colors.reset}`;
};

// Format timestamp to be more concise
const formatTimestamp = (timestamp: string) => {
  return `${colors.dim}${new Date(timestamp).toLocaleTimeString()}${colors.reset}`;
};

// Format status code with color
const formatStatus = (status?: number) => {
  if (!status) return '';
  const statusColor =
    statusColors[Math.floor(status / 100).toString()] || colors.reset;
  return `${statusColor}${status}${colors.reset}`;
};

let lastLogTimestamp = 0;
const LOG_DEBOUNCE_MS = 1000;

// Add log level filtering
const LOG_LEVEL_PRIORITY = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
} as const;

const CURRENT_LOG_LEVEL = (process.env.NEXT_PUBLIC_LOG_LEVEL ||
  'info') as LogLevel;

function shouldLog(level: LogLevel): boolean {
  return LOG_LEVEL_PRIORITY[level] <= LOG_LEVEL_PRIORITY[CURRENT_LOG_LEVEL];
}

// Update the log function
function log(level: LogLevel, message: string, context = {}) {
  try {
    // Skip logging if below current log level
    if (!shouldLog(level)) return;

    // For errors, include stack trace if available
    if (level === 'error' && context instanceof Error) {
      context = {
        ...context,
        stack: context.stack,
        cause: context.cause,
      };
    }

    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context: {
        ...context,
        runtime: getRuntimeInfo().runtime,
      },
    };

    // Only show runtime info for debug level
    if (level !== 'debug') {
      delete entry.context.runtime;
    }

    // For non-error levels, simplify context output
    if (level !== 'error') {
      Object.keys(entry.context).forEach((key) => {
        if (typeof entry.context[key] === 'object') {
          delete entry.context[key];
        }
      });
    }

    console.log(formatLogEntry(entry));
  } catch (error) {
    console.error('Logger error:', error);
  }
}

// Update the formatLogEntry function
function formatLogEntry(entry: LogEntry): string {
  const levelColor = levelColors[entry.level];
  const timestamp = formatTimestamp(entry.timestamp);
  const level = `${levelColor}${entry.level.toUpperCase()}${colors.reset}`;

  // For errors, make the output more prominent
  if (entry.level === 'error') {
    return `\n${colors.bgRed}${colors.bright} ERROR ${colors.reset}\n${timestamp} ${entry.message}\n${
      entry.context.stack
        ? `\n${colors.dim}${entry.context.stack}${colors.reset}`
        : ''
    }`;
  }

  // Simplified output for other levels
  let logMessage = `${timestamp} ${level} ${entry.message}`;

  // Only show status and duration for info level
  if (entry.level === 'info') {
    if (entry.context.status) {
      logMessage += ` ${formatStatus(entry.context.status)}`;
    }
    if (entry.context.duration) {
      logMessage += ` ${formatDuration(entry.context.duration)}`;
    }
  }

  // Only show additional context for warn and error levels
  if (
    (entry.level as LogLevel) === 'warn' ||
    (entry.level as LogLevel) === 'error'
  ) {
    const contextKeys = Object.keys(entry.context).filter(
      (key) => !['status', 'duration', 'runtime'].includes(key)
    );

    if (contextKeys.length > 0) {
      const contextObj = contextKeys.reduce(
        (acc, key) => {
          acc[key] = entry.context[key];
          return acc;
        },
        {} as Record<string, any>
      );

      logMessage += `\n${prettyJson(contextObj)}`;
    }
  }

  return logMessage;
}

export const runtimeLogger = {
  // Base logging interface
  info: (message: string, context = {}) => {
    if (typeof window !== 'undefined') {
      // Browser-friendly logging
      console.info(`[INFO] ${message}`, context);
      return;
    }
    // Server-side logging with all the fancy formatting
    log('info', message, context);
  },
  error: (message: string, context = {}) => {
    if (typeof window !== 'undefined') {
      // Browser-friendly logging
      console.error(`[ERROR] ${message}`, context);
      return;
    }
    // Server-side logging with all the fancy formatting
    log('error', message, context);
  },
  warn: (message: string, context = {}) => log('warn', message, context),
  debug: (message: string, context = {}) => log('debug', message, context),
  request: (req: Request, context: LogContext = {}) => {
    try {
      const url = new URL(req.url);
      const now = Date.now();

      if (now - lastLogTimestamp < LOG_DEBOUNCE_MS) return;
      lastLogTimestamp = now;

      const entry: LogEntry = {
        timestamp: new Date().toISOString(),
        level: 'info',
        message: `${req.method} ${url.pathname}`,
        context: {
          method: req.method,
          path: url.pathname,
          status: context.status,
          duration: context.duration,
          runtime: getRuntimeInfo().runtime,
        },
      };

      console.log(formatLogEntry(entry));
    } catch (error) {
      console.error('Logger error:', error);
    }
  },
};

function getRuntimeInfo() {
  try {
    if (typeof EdgeRuntime === 'string') {
      return { runtime: `edge-${EdgeRuntime}` };
    }
    if (typeof window !== 'undefined') {
      return { runtime: 'browser' };
    }
    // Safe node.js version check for non-edge environments
    if (process?.env?.NEXT_RUNTIME !== 'edge') {
      return { runtime: 'node' };
    }
    return { runtime: 'edge' };
  } catch {
    return { runtime: 'unknown' };
  }
}

// Update clientLogger to be more concise
export const clientLogger = {
  error: (message: string, error?: Error) => {
    console.error(`❌ ${message}`, error?.message || '');
    if (error?.stack) console.error(error.stack);
  },
  warn: (message: string) => console.warn(`⚠️ ${message}`),
  info: (message: string) => console.info(`ℹ️ ${message}`),
  debug: (message: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`🔍 ${message}`);
    }
  },
};
