import React, { useRef } from 'react';

import Card from '../UI/Card';
import styles from './NewUserForm.module.css'
import Button from '../UI/Button'
import NewUserWrapper from '../Helpers/Wrapper'

const NewUserForm = (props) => {

    console.log('Rendering form')
    const nameInputRef = useRef();
    const ageInputRef = useRef();


    const formHandler = (e) => {
        e.preventDefault()
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length && +enteredAge > 0) {
            props.onSave({
                name: enteredName,
                age: +enteredAge,
                id: Math.random().toString()
            })
            nameInputRef.current.value = ''
            ageInputRef.current.value = ''
        } else {
            props.onError(true)
        }

    }

    

    return (
        <NewUserWrapper>
            <Card className={styles.input}>
                <Button onClick={props.onToggle}>Hide Users</Button>
                <form onSubmit={formHandler} autoComplete="off">
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        ref={nameInputRef}
                    />
                    <label htmlFor='age'>Age</label>
                    <input
                        id='age'
                        type='number'
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </NewUserWrapper>
    )
}

export default React.memo(NewUserForm);