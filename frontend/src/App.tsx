import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import DinerDishInput from './DinerDishInput';
import DinerDishCard from './DinerDishCard';

function App() {

  const [allDishes, setAllDishes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5044/api/Diner')
        .then((results: any) => {
          // console.log(results.data)
            setAllDishes(results.data)
        })
        .catch((err: string) => {
            console.error(err);
        });
  }, [])

  return (
    <div className="App" style={{backgroundColor: 'orange', height: '100vh'}}>
      <h1 style={{padding: '30px', fontSize: '50px', color: 'blue'}}>Welcome To the {`Developer's Diner`}</h1>
      <DinerDishInput/>
      <DinerDishCard dishes={allDishes} />
    </div>
  );
}

export default App;
