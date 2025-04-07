"use client";

import { logger } from "@/lib/logger";
import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error("Client-side error caught by boundary:", {
      error: error.message,
      stack: error.stack,
      digest: error.digest,
    });
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <button
        onClick={reset}
        className="rounded-md bg-sky-600 px-4 py-2 text-sm text-white transition-colors hover:bg-sky-500"
      >
        Try again
      </button>
    </div>
  );
}
