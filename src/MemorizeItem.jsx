import React, { Component, PureComponent } from 'react';

let data = "";

class List extends PureComponent {
    render() {
        console.log('List rendered');
        return (
            <ul>
                {this.props.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        );
    }
}
class MemorizeItem extends Component {
    state = {
        items: ['Apple', 'Banana', 'Orange'],
    };
    addItem = () => {
        this.setState({
            items: [...this.state.items, data]
        });
    };
    getData(e) {
        data = e.target.value;
    }
    render() {
        return (
            <div>
                <List items={this.state.items} />
                <input type='text' onChange={this.getData} />
                <button onClick={this.addItem}>Add Item</button>
            </div>
        );
    }
}
export default MemorizeItem;