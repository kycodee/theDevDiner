import React from 'react';
import './App.css';
import DinerDishInput from './DinerDishInput';
import DinerDishCard from './DinerDishCard';

function App() {
  return (
    <div className="App" style={{backgroundColor: 'orange', height: '100vh'}}>
      <h1 style={{padding: '30px', fontSize: '50px', color: 'blue'}}>Welcome To the {`Developer's Diner`}</h1>
      <DinerDishInput/>
      <DinerDishCard/>
    </div>
  );
}

export default App;
