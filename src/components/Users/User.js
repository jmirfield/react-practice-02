const User = (props) => {
    return(
        <li>
            <h3>Username: {props.user.name}</h3>
            <p>Age: {props.user.age}</p>
        </li>
    )
}

export default User;