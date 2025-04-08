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

// Update the formatLogEntry function
function formatLogEntry(entry: LogEntry): string {
  const levelColor = levelColors[entry.level];
  const timestamp = formatTimestamp(entry.timestamp);
  const level = `${levelColor}${entry.level.toUpperCase()}${colors.reset}`;

  let logMessage = `${timestamp} ${level} ${entry.message}`;

  if (entry.context.status) {
    logMessage += ` ${formatStatus(entry.context.status)}`;
  }

  if (entry.context.duration) {
    logMessage += ` ${formatDuration(entry.context.duration)}`;
  }

  // Add runtime info in dim color
  if (entry.context.runtime) {
    logMessage += ` ${colors.dim}[${entry.context.runtime}]${colors.reset}`;
  }

  // Add any additional context with pretty formatting
  const contextKeys = Object.keys(entry.context).filter(
    (key) => !['status', 'duration', 'runtime'].includes(key)
  );

  if (contextKeys.length > 0) {
    const contextObj: { [key: string]: any } = {};
    contextKeys.forEach((key) => {
      const value = entry.context[key];
      contextObj[key] = typeof value === 'object' ? value : String(value);
    });

    logMessage += `\n${prettyJson(contextObj)}`;
  }

  return logMessage;
}

export const logger = {
  info: (message: string, context = {}) => log('info', message, context),
  warn: (message: string, context = {}) => log('warn', message, context),
  error: (message: string, context = {}) => log('error', message, context),
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

function log(level: LogLevel, message: string, context = {}) {
  try {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context: {
        ...context,
        runtime: getRuntimeInfo().runtime,
      },
    };

    console.log(formatLogEntry(entry));
  } catch (error) {
    console.error('Logger error:', error);
  }
}
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
