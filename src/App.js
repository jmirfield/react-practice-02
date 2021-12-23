import React, { useState, useCallback } from 'react';
import NewUserForm from './components/Users/NewUserForm'
import UsersList from './components/Users/UsersList'
import ErrorModal from './components/UI/ErrorModal';

function App() {

  const [users, setUsers] = useState([
    {
      name: 'Justin',
      age: 24,
      id: Math.random().toString()
    },
    {
      name: 'TestUser',
      age: 1,
      id: Math.random().toString()
    }
  ])

  const [showUsers, setShowUsers] = useState(true)
  const [isError, setError] = useState(false)


  const addUserHandler = useCallback((user) => {
    setUsers(prev => {
      return [user, ...prev]
    })
  }, [])

  const toggleUserHandler = useCallback(() => {
    setShowUsers((prev) => !prev)
  }, [])

  const closeErrorHandler = () => {
    setError(false)
  }

  const errorHandler = useCallback(() => {
    setError(true)
  }, [])

  return (
    <>
      {isError && <ErrorModal title='An error has occured!' message='Something went wrong!' onButton={closeErrorHandler} />}
      <NewUserForm onSave={addUserHandler} onToggle={toggleUserHandler} onError={errorHandler}/>
      {showUsers && <UsersList users={users} />}
    </>
  );
}

export default App;
