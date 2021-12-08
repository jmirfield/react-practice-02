import { useState } from 'react';

import Card from '../UI/Card';
import styles from './NewUserForm.module.css'
import Button from '../UI/Button'

const NewUserForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredUsername: '',
        enteredAge: ''
    })

    const formHandler = (e) => {
        e.preventDefault()
        if (userInput.enteredUsername.trim().length && +userInput.enteredAge > 0) {
            props.onSave({
                name: userInput.enteredUsername,
                age: +userInput.enteredAge,
                id: Math.random().toString()
            })
            setUserInput({
                enteredUsername: '',
                enteredAge: ''
            })
        }

    }

    const usernameHandler = (e) => {
        setUserInput(prev => {
            return {
                ...prev,
                enteredUsername: e.target.value
            }
        })
    }

    const ageHandler = (e) => {
        setUserInput((prev) => {
            return {
                ...prev,
                enteredAge: e.target.value
            }
        })
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={formHandler} autoComplete="off">
                <label htmlFor='username'>Username</label>
                <input id='username' value={userInput.enteredUsername} onChange={usernameHandler} type='text' />
                <label htmlFor='age'>Age</label>
                <input id='age' value={userInput.enteredAge} onChange={ageHandler} type='number' />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default NewUserForm;