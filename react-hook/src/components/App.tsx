import React, {useState} from 'react';
import '../scss/app.scss';
import Board from './Board';
import Score from './Score';

const idCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
idCards.sort(() => 0.5 - Math.random())


function App() {

  const [moves, setMoves] = useState<number>(0)
  const [bestScore, setBestScore] = useState<number>(
    parseInt(localStorage.getItem('bestScore') || '0') || Number.MAX_SAFE_INTEGER
  )
  const finishGameCB = () => {
    const newBestScore = moves < bestScore ? moves : bestScore
    setBestScore(newBestScore)
    localStorage.setItem('bestScore',newBestScore.toString())
  }

  return (
    <div className="app-container">
      <h1>POKéMON MEMORY</h1>
      <Board 
        idCards={idCards}
        setMoves={setMoves}
        finishGameCB={finishGameCB}
      />
      <Score 
        moves={moves}
        bestScore={bestScore}
      />
    </div>
  );
}

export default App;
