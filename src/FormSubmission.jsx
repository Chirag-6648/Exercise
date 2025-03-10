import { Component, createRef } from "react";

class FormSubmission extends Component {
    constructor(props) {
        super(props)
        this.nameRef = createRef();
        this.emailRef = createRef();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert("Name: " + this.nameRef.current.value + "Email: " + this.emailRef.current.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" ref={this.nameRef} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" ref={this.emailRef} />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default FormSubmission