import { Component, createRef } from "react";

class AutoFocusInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = createRef();
    }
    componentDidMount() {
        this.inputRef.current.focus();
        console.log("Input ref");
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}
                    placeholder="Focus on me!" />
            </div>
        );
    }
}
export default AutoFocusInput