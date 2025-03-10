import { Component, createRef } from "react";

class ControlingModel extends Component {
    constructor(props) {
        super(props);
        this.modalRef = createRef(); // Create a ref for the modal div
    }
    openModal = () => {
        this.modalRef.current.style.display = 'block'; // Show    the modal
    };
    closeModal = () => {
        this.modalRef.current.style.display = 'none'; // Hide   the modal
    };
    render() {
        return (
            <div>
                <button onClick={this.openModal}>Open Modal</button>
                <div
                    ref={this.modalRef}
                    style={{
                        display: 'none',
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    }}
                >
                    <h2>Modal Content</h2>
                    <button onClick={this.closeModal}>Close</button>
                </div>
            </div>
        );
    }
}
export default ControlingModel