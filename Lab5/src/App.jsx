import React from 'react';
import './App.css';
import PageTitle from './components/PageTitle';
import ToDoContainer from './components/ToDoContainer';

function App() {
  return (
    <>
      <PageTitle title="ToDo Table:" />
      <ToDoContainer/>
    </>
  );
}

export default App;
