import React, { useState } from 'react';
// Quote Generator Component
const QuoteGenerator = () => {
    const quotes = [
        "The only way to do great work is to love what you do. Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.  Winston Churchill",
        "It is never too late to be what you might have been. George Eliot",
        "Act as if what you do makes a difference. William James",
        "Success usually comes to those who are too busy to be looking for it.  Henry David Thoreau"
    ];
    const [quote, setQuote] = useState('');
    const generateQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };
    return (
        <div>
            <h1>Inspirational Quote</h1>
            <p>{quote || "Click the button to generate a quote."}</p>
            <button onClick={generateQuote}>Generate
                Quote</button>
        </div>
    );
};
export default QuoteGenerator