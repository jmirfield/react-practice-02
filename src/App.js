import React, { useState } from 'react';

import NewUserForm from './components/Users/NewUserForm'
import UsersList from './components/Users/UsersList'

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


  const addUserHandler = (user) => {
    setUsers(prev => {
      return [user, ...prev]
    })
  }

  return (
    <div>
      <NewUserForm onSave={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
