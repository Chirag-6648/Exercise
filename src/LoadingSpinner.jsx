import { Component } from "react";

const LoadingSpinner = (WrappedComponent) => {
    return class extends Component {
        render() {
            const { isLoading, ...otherProps } = this.props;
            return isLoading ? (
                <div>Loading ...</div>
            ) : (
                <WrappedComponent {...otherProps} />
            )
        }
    }
}
class DataDisplay extends Component {
    render() {
        return (
            <div>
                <h1>Data is loaded!</h1>
                <p>{this.props.data}</p>
            </div>
        )
    }
}
const DataDisplayWithLoading = LoadingSpinner(DataDisplay);
class Data extends Component {
    state = {
        isLoading: true,
        data: null,
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
                data: 'Fetched data from the API!',
            });
        }, 2000); // Simulate data fetch delay
    }
    render() {
        return (
            <div>
                <DataDisplayWithLoading
                    isLoading={this.state.isLoading}
                    data={this.state.data}
                />
            </div>
        );
    }
} export default Data;