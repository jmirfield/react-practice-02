import { Component } from 'react'

class User extends Component {
    render() {
        return (
            <li>
                <h3>{this.props.user.name}</h3>
                <p>Age: {this.props.user.age}</p>
            </li>
        )
    }
}

export default User;