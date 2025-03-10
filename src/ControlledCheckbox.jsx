import { Component } from "react";


class ControlledCheckbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: false
        }
    }
    handleCheckboxChange = (e) => {
        this.setState({ isChecked: !this.state.isChecked })
    }
    render() {
        return (
            <div>
                <h2>Controlled Checkbox</h2>
                <label>
                    <input
                        type="checkbox"
                        checked={this.state.isChecked}
                        onChange={this.handleCheckboxChange}
                    />
                    I accept the terms and conditions
                </label>
                <p>{this.state.isChecked ? "you accepted the terms" : "you denied the terms"}</p>
            </div>
        )
    }

}
export default ControlledCheckbox;