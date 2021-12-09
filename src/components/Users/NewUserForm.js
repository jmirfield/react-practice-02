import { useState, useRef } from 'react';

import Card from '../UI/Card';
import styles from './NewUserForm.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import NewUserWrapper from '../Helpers/Wrapper'

const NewUserForm = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [isError, setError] = useState(false)

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
            setError(true)
        }

    }

    const errorHandler = () => {
        setError(false)
    }

    return (
        <NewUserWrapper>
            {isError && <ErrorModal title='An error has occured!' message='Something went wrong!' onButton={errorHandler} />}
            <Card className={styles.input}>
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

export default NewUserForm;