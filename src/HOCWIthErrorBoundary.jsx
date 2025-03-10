import React, { Component } from 'react';
// Higher-Order Component for error boundary
const withErrorBoundary = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }
        static getDerivedStateFromError() {
            return { hasError: true };
        }
        componentDidCatch(error, info) {
            console.log(error, info);
        }
        render() {
            if (this.state.hasError) {
                return <div>Something went wrong. Please try again
                    later.</div>;
            }
            return <WrappedComponent {...this.props} />;
        }
    };
};
// A component that will throw an error
class BuggyComponent extends Component {
    render() {
        if (this.props.hasError) {
            throw new Error('Something went wrong!');
        }
        return <h1>No error, all good!</h1>;
    }
}
const BuggyComponentWithErrorBoundary = withErrorBoundary(BuggyComponent);
class HOCWithErrorBoundary extends Component {
    render() {
        return (
            <div>
                <BuggyComponentWithErrorBoundary hasError={false}
                />
                <BuggyComponentWithErrorBoundary hasError={true}
                />
            </div>
        );
    }
}
export default HOCWithErrorBoundary;
