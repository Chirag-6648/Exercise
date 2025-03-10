import { Component } from "react";

class ControlledRadioButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gender: "male",
        }
    }
    handleGenderChange = (e) => {
        this.setState({
            gender: e.target.value
        })
    }
    render() {
        return (
            <div>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === 'male'}
                        onChange={this.handleGenderChange}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === 'female'}
                        onChange={this.handleGenderChange}
                    />
                    Female
                </label>
                <p>Selected Gender: {this.state.gender}</p>
            </div>
        )
    }
}
export default ControlledRadioButton