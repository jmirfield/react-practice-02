import React, { useMemo } from 'react'

import User from './User'
import Card from '../UI/Card'
import styles from './UsersList.module.css'

const UsersList = (props) => {
    console.log('Rendering List')
    const Users = useMemo(() => props.users, [props.users]).map(user => {
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

export default React.memo(UsersList);