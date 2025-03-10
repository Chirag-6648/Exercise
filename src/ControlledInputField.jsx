import { Component } from "react";

class ControlledInputField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ""
        }
    }
    handleChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }
    render() {
        return (
            <div>
                <h2>Controlled Input field</h2>
                <input
                    type="text"
                    placeholder="Input Value for state"
                    value={this.state.inputValue}
                    onChange={this.handleChange}

                />
                <h2>State : {this.state.inputValue}</h2>
            </div>
        )
    }
}
export default ControlledInputField