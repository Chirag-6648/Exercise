import React, { useState, useEffect } from 'react';
const Subscription = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        // Simulate receiving messages from a subscription service
        const interval = setInterval(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                `New message at ${new Date().toLocaleTimeString()}`,
            ]);
        }, 3000); // Simulate receiving a message every 3 

        // Cleanup: unsubscribe when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this effect runs only once
    return (
        <div>
            <h1>Messages:</h1>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
};
export default Subscription;