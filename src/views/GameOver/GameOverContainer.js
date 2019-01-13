import React, { Component } from 'react'
import Gameover from './GameOver'

import game from '../../helpers/storage'

class GameOverContainer extends Component {
	constructor() {
		super()
		const score = game.getItem( 'score' )
		this.state = { score }
	}

	resetGame() {
		console.log('clear')
		game.clearGame()
	}

	render() {
		return ( 
			<Gameover
				resetGame={ this.resetGame }
				score={ this.state.score }
			/>
		)
	}
}
export default GameOverContainer