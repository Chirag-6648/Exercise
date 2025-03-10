// import { Component, createRef } from "react";

// class UncontrolledRadioButton extends Component {
//     constructor(props) {
//         super(props)
//         this.genderRef = createRef();
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.genderRef);
//         alert("selected Gender is : " + this.genderRef.current.value)
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <div>

//                         <label>
//                             <input
//                                 type="radio"
//                                 name="gender"
//                                 value="female"
//                                 ref={this.genderRef}
//                             />
//                             Female
//                         </label>
//                         <label>
//                             <input
//                                 type="radio"
//                                 name="gender"
//                                 value="male"
//                                 ref={this.genderRef}
//                             />
//                             Male
//                         </label>
//                     </div>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }
// export default UncontrolledRadioButton

import React, { Component, createRef } from 'react';
class UncontrolledRadioButton extends Component {
    constructor(props) {
        super(props);
        this.maleRef = createRef(); // Ref for the radio buttons
        this.femaleRef = createRef(); // Ref for the radio buttons
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let selectedGender = null
        if (this.maleRef.current.checked) {
            selectedGender = 'male';
        } else if (this.femaleRef.current.checked) {
            selectedGender = 'female';
        }
        if (selectedGender) {
            alert('Selected Gender: ' + selectedGender); // Show selected gender
        } else {
            alert('No gender selected'); // No gender selected
        }
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            ref={this.maleRef}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            ref={this.femaleRef}
                        />
                        Female
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default UncontrolledRadioButton;