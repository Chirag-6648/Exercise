import { Component } from "react";

class ControlledDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedColor: "red"
        }
    }
    handleSelectChage = (e) => {
        this.setState({ selectedColor: e.target.value })
    }
    render() {
        return (
            <div>
                <h2>controlled dropdown</h2>
                <select name="color" value={this.state.selectedColor} onChange={this.handleSelectChage}>
                    <option value="red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                </select>
                <p>Your selected color is: {this.state.selectedColor}</p>
            </div>
        )
    }
}
export default ControlledDropdown;