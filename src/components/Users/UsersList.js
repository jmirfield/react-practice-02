import User from './User'
import Card from '../UI/Card'
import styles from './UsersList.module.css'

const UsersList = (props) => {
    const Users = props.users.map(user => {
        return <User
            user={user}
            key={user.id}
        />
    })
    return (
        <Card className={styles.list}>
            <ul>
                {Users}
            </ul>
        </Card>
    )
}

export default UsersList;