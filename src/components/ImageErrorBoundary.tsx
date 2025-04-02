'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  fallback?: ReactNode
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ImageErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Image error caught:', error)
  }

  public render() {
    if (this.state.hasError) {
      // Return fallback UI
      return (
        this.props.fallback || (
          <div className="bg-slate-100 dark:bg-slate-800 w-full h-full flex items-center justify-center">
            <span className="text-slate-500">Image not available</span>
          </div>
        )
      )
    }

    return this.props.children
  }
}
