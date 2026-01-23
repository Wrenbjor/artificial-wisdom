import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          margin: '2rem',
          background: 'rgba(255, 0, 0, 0.1)',
          border: '1px solid red',
          borderRadius: '8px',
          color: '#ff6666'
        }}>
          <h2>Something went wrong</h2>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {this.state.error?.message}
          </pre>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '0.8rem', opacity: 0.7 }}>
            {this.state.error?.stack}
          </pre>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
