import { Component, ErrorInfo } from "react";

class ErrorBoundary extends Component<{children: JSX.Element},{error: Error | null, errorInfo: ErrorInfo | null}> {

    state : {error: Error | null, errorInfo: ErrorInfo | null} = {
        error: null,
        errorInfo: null 
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            error: error,
            errorInfo: errorInfo  
        })
    }

    render() : JSX.Element {
        if (this.state.errorInfo) {
            return (<p>Error has occured.</p>)
        }

        return this.props.children;
    }
}

export default ErrorBoundary;