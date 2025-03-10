import React, { Component } from 'react';
// Higher-Order Component for window width
const withWindowWidth = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                windowWidth: window.innerWidth,
            };
        }
        updateWindowWidth = () => {
            this.setState({ windowWidth: window.innerWidth });
        };
        componentDidMount() {
            console.log("mount");
            window.addEventListener('resize', this.updateWindowWidth);
        }
        componentWillUnmount() {
            console.log("unmounted");
            window.removeEventListener('resize', this.updateWindowWidth);
        }
        render() {
            return <WrappedComponent
                windowWidth={this.state.windowWidth} {...this.props} />;
        }
    };
};
// Display window width
class WindowWidthDisplay extends Component {
    render() {
        return <h1>Window Width:
            {this.props.windowWidth}px</h1>;
    }
}
const EnhancedWindowWidthDisplay = withWindowWidth(WindowWidthDisplay);
class WindowWidth extends Component {
    render() {
        return (
            <div>
                <EnhancedWindowWidthDisplay />
            </div>
        );
    }
}
export default WindowWidth;