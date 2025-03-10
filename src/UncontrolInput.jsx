import { Component, createRef } from "react";

class UncontrolInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = createRef()
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted: " + this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.inputRef} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

}
export default UncontrolInput