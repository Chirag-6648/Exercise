import React, { Component, PureComponent } from 'react';
class Card extends PureComponent {
    render() {
        console.log('ProductCard rendered');
        const { name, price, available } = this.props;
        return (
            <div>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>{available ? 'In Stock' : 'Out of Stock'}</p>
            </div>
        );
    }
}
class ProductCard extends Component {
    state = {
        product: {
            name: 'Laptop', price: 999, available: true
        },
    };
    toggleAvailability = () => {
        this.setState((prevState) => ({
            product: {
                ...prevState.product, available: !prevState.product.available
            },
        }));
    };
    render() {
        return (
            <div>
                <Card {...this.state.product} />
                <button onClick={this.toggleAvailability}>Toggle Availability</button>
            </div>
        );
    }
}
export default ProductCard;