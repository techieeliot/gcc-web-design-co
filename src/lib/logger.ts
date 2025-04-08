declare const EdgeRuntime: string;

type LogLevel = 'info' | 'warn' | 'error' | 'debug';
type LogContext = { status?: number; duration?: number; [key: string]: any };

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context: LogContext;
}

// Simplified runtime detection
const getRuntimeInfo = () => ({
  runtime: typeof EdgeRuntime !== 'undefined' ? 'edge' : 'node',
  env: process.env.NODE_ENV || 'development',
});

// Format duration to 2 decimal places
const formatDuration = (duration?: number) =>
  duration ? Math.round(duration * 100) / 100 : undefined;

let lastLogTimestamp = 0;
const LOG_DEBOUNCE_MS = 1000; // Only log once per second for same route

export const logger = {
  info: (message: string, context = {}) => log('info', message, context),
  warn: (message: string, context = {}) => log('warn', message, context),
  error: (message: string, context = {}) => log('error', message, context),
  debug: (message: string, context = {}) => log('debug', message, context),
  request: (req: Request, context: LogContext = {}) => {
    try {
      const url = new URL(req.url);
      const now = Date.now();

      // Debounce logs for same route
      if (now - lastLogTimestamp < LOG_DEBOUNCE_MS) {
        return;
      }
      lastLogTimestamp = now;

      const entry: LogEntry = {
        timestamp: new Date().toISOString(),
        level: 'info',
        message: `${req.method} ${url.pathname}`,
        context: {
          path: url.pathname,
          method: req.method,
          status: context.status,
          duration: formatDuration(context.duration),
          runtime: getRuntimeInfo().runtime,
        },
      };

      console.log(JSON.stringify(entry));
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

    console.log(JSON.stringify(entry));
  } catch (error) {
    console.error('Logger error:', error);
  }
}
