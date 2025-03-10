import React, { Component } from 'react';
class ColorPickerWithClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#000000',
        };
    }
    handleColorChange = (event) => {
        this.setState({
            color: event.target.value,
        });
    };
    render() {
        return (
            <div>
                <input
                    type="color"
                    value={this.state.color}
                    onChange={this.handleColorChange}
                />
                <p>Selected Color: {this.state.color}</p>
            </div>
        );
    }
}
export default ColorPickerWithClass;
