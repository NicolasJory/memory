import React from 'react';
import './App.css';
import Board from '../src/components/Board';

const idCards = [1,2,3,4,5,6,7,8,9,10,11,12,13]
idCards.sort(() => 0.5 - Math.random())


function App() {
  return (
    <div className="App">
      <h1>Memory</h1>
      <Board idCards={idCards}/>
    </div>
  );
}

export default App;
