import { Component, PureComponent } from "react";


class Profile extends Component {
    render() {
        console.log("User Profile Rendered");
        return (
            <div>
                <h2> Name : {this.props.name}</h2>
                <h2>Age : {this.props.age}</h2>
            </div>
        )
    }
}
class UserProfile extends PureComponent {
    state = {
        user: { name: "chandu", age: 21 }
    }
    changeAge = () => {
        this.setState({ user: { ...this.state.user, age: this.state.user.age + 1 } })
    }
    render() {
        return (
            <div>
                <Profile name={this.state.user.name} age={this.state.user.age} />
                <button onClick={this.changeAge}>Increase Age</button>
            </div>
        )
    }
}

export default UserProfile;