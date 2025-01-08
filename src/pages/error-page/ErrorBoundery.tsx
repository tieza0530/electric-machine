import { ReactNode, Component } from 'react';
import { ErrorBoundariesPage } from './500';

interface MyErrorBoundaryProps {
  children: ReactNode;
}

interface MyErrorBoundaryState {
  hasError: boolean;
}

class MyErrorBoundary extends Component<MyErrorBoundaryProps, MyErrorBoundaryState> {
  state: MyErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): MyErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundariesPage />;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;
