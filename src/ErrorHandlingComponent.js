import React, { Component } from 'react';

class ErrorHandlingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Optional for logging or state updates based on the error
    console.error('Error:', error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to the console or external service
    console.error('Error Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; // Render children components
  }
}

export default ErrorHandlingComponent;