type LogLevel = "info" | "warn" | "error" | "debug";

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context: {
    path?: string;
    method?: string;
    statusCode?: number;
    duration?: number;
    memoryUsage?: number;
    headers?: Record<string, string>;
    query?: Record<string, string>;
    error?: {
      name?: string;
      message?: string;
      stack?: string;
    };
    [key: string]: any;
  };
}

export const logger = {
  info: (message: string, context = {}) => log("info", message, context),
  warn: (message: string, context = {}) => log("warn", message, context),
  error: (message: string, context = {}) => log("error", message, context),
  debug: (message: string, context = {}) => log("debug", message, context),
  request: (req: Request, context = {}) => {
    const url = new URL(req.url);
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level: "info",
      message: `${req.method} ${url.pathname}`,
      context: {
        path: url.pathname,
        method: req.method,
        query: Object.fromEntries(url.searchParams),
        headers: Object.fromEntries(req.headers),
        ...context,
        memoryUsage: process.memoryUsage().heapUsed / 1024 / 1024, // MB
        environment: process.env.NODE_ENV,
        nodeVersion: process.version,
        ...getNetlifyContext(),
      },
    };
    console.log(JSON.stringify(entry, null, 2));
  },
};

function getNetlifyContext() {
  return {
    netlifyContext: process.env.CONTEXT,
    netlifyCommit: process.env.COMMIT_REF,
    netlifySiteUrl: process.env.URL,
    netlifyDeployUrl: process.env.DEPLOY_URL,
    netlifyBuildId: process.env.BUILD_ID,
  };
}

function log(level: LogLevel, message: string, context = {}) {
  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    context: {
      ...context,
      memoryUsage: process.memoryUsage().heapUsed / 1024 / 1024,
      environment: process.env.NODE_ENV,
      ...getNetlifyContext(),
    },
  };

  console.log(JSON.stringify(entry, null, 2));
}
