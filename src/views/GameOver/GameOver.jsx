import React from 'react'
import { withRouter } from 'react-router-dom'


const GameOver = ({
    resetGame,
    score
}) => {
    const Button = withRouter(({ history }) => (
        <button
            onClick={() => { 
                history.push('/') 
                resetGame()
            }}
        >
        Try again!
        </button>
    ))
    return ( 
        <div>
            <h1>You're a loser</h1>
            <p>
                Your score: { score }
            </p>
            <Button />
        </div>
    )
}

export default GameOver