import React from 'react'
import ReactDOM from 'react-dom/client';
import CardsContainer from './CardsContainer';

const Test = () => {

    const root = ReactDOM.createRoot(document.getElementById('root'));

    const restart = () => {
        root.render(<CardsContainer></CardsContainer>)
        return
    }

  return (
    <div>
        <button onClick={restart}>Jugar de nuevo</button>
    </div>
  )
}

export default Test