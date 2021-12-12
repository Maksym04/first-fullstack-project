import './App.css';
import React from 'react';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

function App () {
  return (
    <>
      <UserForm />
      <hr />
      <UsersList />
    </>
  );
}

export default App;
