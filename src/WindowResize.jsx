import React, { useState, useEffect } from 'react';

const WindowResize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        // Function to update window width
        const handleResize = () => { setWidth(window.innerWidth); console.log("resized"); }
        // Add event listener for resize event
        window.addEventListener('resize', handleResize);
        // Cleanup event listener when component unmounts
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts
    return (
        <div>
            <h2>Window Width: {width}px</h2>
        </div>
    );
};
export default WindowResize;