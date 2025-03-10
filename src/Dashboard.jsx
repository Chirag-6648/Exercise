// Dashboard.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import './dashboard.css'; // Your custom CSS

const Dashboard = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <h1>function component</h1>
                    <li>
                        <Link to="/calculator">Calculator</Link>
                    </li>
                    <li>
                        <Link to="/colorPicker">Color Picker</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <h1>class component</h1>
                    <li>
                        <Link to="/todo">ToDo</Link>
                    </li>
                    <li>
                        <Link to="/calculatorWithClass">Calculator With Class</Link>
                    </li>

                    <li>
                        <Link to="/colorPickerWithClass">Color Picker With Class</Link>
                    </li>

                    <li>
                        <Link to="/counterWithClass">Counter With Class</Link>
                    </li>
                    <h1>Higher Order Component</h1>
                    <li>
                        <Link to="/HOCWithCounter">HOC With Counter</Link>
                    </li>
                    <li>
                        <Link to="/loadingSpinner">Loading Spinner</Link>
                    </li>
                    <li>
                        <Link to="/quoteGenerator">Quote Generator</Link>
                    </li>

                    <li>
                        <Link to="/WithPermission">Permission With HOC</Link>
                    </li>
                    <li>
                        <Link to="/HOCWithErrorBoundary">HOC With Error Boundary</Link>
                    </li>
                    <li>
                        <Link to="/WindowWidth">Window Width</Link>
                    </li>
                    <h1>Pure Component</h1>
                    <li>
                        <Link to="/counterWithPure">Counter WIth Pure Component</Link>
                    </li>
                    <li>
                        <Link to="/userProfile">User Profile</Link>
                    </li>
                    <li>
                        <Link to="/memorizeItem">Memorize Item</Link>
                    </li>
                    <li>
                        <Link to="/productCard">Product Card</Link>
                    </li>
                    <li>
                        <Link to="/todoWithPure">Todo With Pure Component</Link>
                    </li>
                    <h1>Controlled Components</h1>
                    <li>
                        <Link to="/controlledInputField">Controlled Input Field</Link>
                    </li>
                    <li>
                        <Link to="/controlledCheckbox">Controlled Checlbox</Link>
                    </li>
                    <li>
                        <Link to="/controlledDropdown">Controlled Select Dropdown</Link>
                    </li>
                    <li>
                        <Link to="/controlledManyInput">Controlled With Many Input</Link>
                    </li>
                    <li>
                        <Link to="/controlledRadioButton">Controlled Radio Button</Link>
                    </li>
                    <h1>Uncontrol components</h1>
                    <li>
                        <Link to="/uncontrolInput">Simple Uncontrol Input</Link>
                    </li>
                    <li>
                        <Link to="/uncontrolledRadioButton">Uncontrolled Radio Button   </Link>
                    </li>
                    <h1>Use Referance</h1>
                    <li>
                        <Link to="/autoFocusInput">Auto Focus Input</Link>
                    </li>
                    <li>
                        <Link to="/videoPlayer">Video Player</Link>
                    </li>
                    <li>
                        <Link to="/formSubmission">Form Submission</Link>
                    </li>
                    <li>
                        <Link to="/animatingDiv">Animating Div</Link>
                    </li>
                    <li>
                        <Link to="/controlingModel">Controling A model</Link>
                    </li>
                    <li>
                        <Link to="/timer">Timer With UseEffect</Link>
                    </li>
                    <li>
                        <Link to="/fetchDataUseEffect">Fetch Data With UseEffect</Link>
                    </li>
                    <li>
                        <Link to="/windowResize">Get Window Width with Use Effect</Link>
                    </li>
                    <li>
                        <Link to="/subscription">Subscription Example with useEffect</Link>
                    </li>
                    <li>
                        <Link to="/documentTitleUpdater">Document Title Updater</Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                {/* The Outlet will render the nested component for the selected route */}
                <Outlet />
            </div>
        </div >
    );
};

export default Dashboard;
