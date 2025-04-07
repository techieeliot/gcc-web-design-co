import fs from "fs";
import path from "path";

const logFile = path.join(process.cwd(), "git-hooks.log");

export function logHookExecution(hookName: string, data?: any) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${hookName} executed\n${JSON.stringify(data, null, 2)}\n\n`;

  fs.appendFileSync(logFile, logEntry);
}
