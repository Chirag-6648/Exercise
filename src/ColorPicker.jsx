import { useState } from "react"

const ColorPicker = () => {
    const [color, setColor] = useState("")
    const [colorInHex, setColorInHex] = useState("")
    const handleColorChange = (event) => {
        setColor(hexToRgb(event.target.value));
        setColorInHex(event.target.value)
    }

    function hexToRgb(hex) {
        // Remove the '#' if it's included
        hex = hex.replace('#', '');

        // Parse the hex color
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        // Return the RGB color
        return `rgb(${r}, ${g}, ${b})`;
    }

    return (
        <div>
            <h1>Color Picker</h1>
            <input type="color" onChange={handleColorChange} value={color} />
            <p>Selected Color : {color}</p>
            <p>Selected Color : {colorInHex}</p>
        </div>
    )
}

export default ColorPicker;