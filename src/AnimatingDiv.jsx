import { Component, createRef } from "react";

class AnimatingDiv extends Component {
    constructor(props) {
        super(props)
        this.sectionRef = createRef();
    }
    scrolltoSection = () => {
        console.log("function call");
        this.sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    render() {
        return (
            <div>
                <button onClick={this.scrolltoSection}>Go to
                    Section</button>
                <div style={{
                    height: '1500px', backgroundColor:
                        '#f0f0f0'
                }}>
                    Scroll down to see the section
                </div>
                <div
                    ref={this.sectionRef}
                    style={{
                        height: '200px', backgroundColor:
                            '#a0d0f0'
                    }}
                >
                    This is the section to scroll to!
                </div>
            </div>
        );
    }
}

export default AnimatingDiv