import React, { useState, useEffect } from 'react';
const DocumentTitleUpdater = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Update the document title with the current count
        document.title = `Count: ${count}`;
    }, [count]); // Dependency array ensures the effect runs only when 'count' changes
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
export default DocumentTitleUpdater