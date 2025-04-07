declare const EdgeRuntime: string;

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context: {
    path?: string;
    method?: string;
    statusCode?: number;
    duration?: number;
    headers?: Record<string, string>;
    query?: Record<string, string>;
    error?: {
      name?: string;
      message?: string;
      stack?: string;
    };
    runtime?: string;
    [key: string]: any;
  };
}

// Safe memory usage check that works in both Edge and Node.js
function getMemoryUsage() {
  try {
    if (typeof process !== 'undefined' && process.memoryUsage) {
      return process.memoryUsage().heapUsed / 1024 / 1024;
    }
    return undefined;
  } catch {
    return undefined;
  }
}

// Safe runtime detection
function getRuntimeInfo() {
  if (typeof EdgeRuntime !== 'undefined') {
    return {
      runtime: 'edge',
      version: EdgeRuntime,
    };
  }

  if (typeof process !== 'undefined') {
    return {
      runtime: 'node',
      version: process.version,
    };
  }

  return {
    runtime: 'unknown',
    version: 'unknown',
  };
}

// Get Netlify context safely
function getNetlifyContext() {
  if (typeof process === 'undefined') return {};

  return {
    netlifyContext: process.env.CONTEXT,
    netlifyCommit: process.env.COMMIT_REF,
    netlifySiteUrl: process.env.URL,
    netlifyDeployUrl: process.env.DEPLOY_URL,
    netlifyBuildId: process.env.BUILD_ID,
  };
}

export const logger = {
  info: (message: string, context = {}) => log('info', message, context),
  warn: (message: string, context = {}) => log('warn', message, context),
  error: (message: string, context = {}) => log('error', message, context),
  debug: (message: string, context = {}) => log('debug', message, context),
  request: (req: Request, context = {}) => {
    const url = new URL(req.url);
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level: 'info',
      message: `${req.method} ${url.pathname}`,
      context: {
        path: url.pathname,
        method: req.method,
        query: Object.fromEntries(url.searchParams),
        headers: Object.fromEntries(req.headers),
        ...context,
        ...getRuntimeInfo(),
        memoryUsage: getMemoryUsage(),
        ...getNetlifyContext(),
      },
    };
    console.log(JSON.stringify(entry, null, 2));
  },
};

function log(level: LogLevel, message: string, context = {}) {
  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    context: {
      ...context,
      ...getRuntimeInfo(),
      memoryUsage: getMemoryUsage(),
      ...getNetlifyContext(),
    },
  };

  // In production, use single-line JSON for better log aggregation
  if (process.env.NODE_ENV === 'production') {
    console.log(JSON.stringify(entry));
  } else {
    console.log(JSON.stringify(entry, null, 2));
  }
}
