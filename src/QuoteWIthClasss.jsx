import { Component } from "react";


class QuoteWithClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: "",
        };
        this.quotes = [
            'The only way to do great work is to love what you do.  Steve Jobs',
            'Success is not final, failure is not fatal: It is the courage to continue that counts.  Winston Churchill', 'It is never too late to be what you might have been.  George Eliot', 'Act as if what you do makes a difference.  William James', 'Success usually comes to those who are too busy to be looking for it. Henry David Thoreau',
        ];
    }

    generateQuote = () => {
        const randomQuote = Math.floor(Math.random() * this.quotes.length)
        this.setState({ quote: this.quotes[randomQuote] })
    }
    render() {
        return (
            <div>
                <h1>Inspirational Quote</h1>
                <p>{this.state.quote || 'Click the button to generate a quote.'}</p>
                <button onClick={this.generateQuote}>Generate Quote</button>
            </div>
        );
    }
}
export default QuoteWithClass;

