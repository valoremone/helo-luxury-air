import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create a simple error boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null; errorInfo: React.ErrorInfo | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: 'red' }}>
          <h1>Something went wrong in the React application</h1>
          <p>{this.state.error?.toString()}</p>
          <pre>{this.state.errorInfo?.componentStack}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

try {
  console.log('Starting React application...');
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error("Could not find root element. Make sure there is a div with id 'root' in your HTML.");
  }
  
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
  
  console.log('React application rendered successfully');
} catch (error) {
  console.error('Error rendering React application:', error);
  
  // Display error on page
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif; color: red;">
        <h1>Failed to start React application</h1>
        <p>${error instanceof Error ? error.message : String(error)}</p>
        <pre>${error instanceof Error ? error.stack : ''}</pre>
      </div>
    `;
  }
}
