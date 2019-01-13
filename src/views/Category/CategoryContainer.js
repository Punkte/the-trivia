import React, { Component } from 'react'
import { Redirect } from 'react-router'
import api from '../../helpers/api'
import game from '../../helpers/storage'
import Category from './Category'
import GameOverContainer from '../GameOver/GameOverContainer'

class CategoryContainer extends Component {

	constructor() {
		super()
		this.state = {
			score: 0,
			category: null,
			currentQuestion: 0,
			life: 5,
			gameOver: false,
			categoryScore: 0,
		}
		this.$input= null

	}


	// async needed when using promise
	async componentDidMount() {
		const data = await api.getCategoryById(this.props.match.params.id)
		const score = game.getItem('score')
		const life = game.getItem('life')
		const categoryScore = this.getCategoryInfoById( data.id ).score ? this.getCategoryInfoById( data.id ).score : 0
		console.log(categoryScore)
		const currentQuestion = this.getCategoryInfoById( data.id ).questions ? this.getCategoryInfoById( data.id ).questions : 0
		console.log(currentQuestion)
		this.setState({
			category: data,
			score, 
			life,
			categoryScore,
			currentQuestion
		})
	}
	componentDidUpdate() {
		// open the console to cheat
		this.state.category.clues[this.state.currentQuestion] && console.log( this.state.category.clues[this.state.currentQuestion].answer )
	}


	/**
	 * Category Score getter 
	 * @param {Integer} id 
	 */
	getCategoryInfoById( id ) {
		const categoriesState = game.getItem( 'categoriesState' )
		if( id in categoriesState ) {
			return categoriesState[id]
		}
		return false
	}

	setCategoryInfoById( id, obj ) {
		const info = game.getItem( 'categoriesState' )
		info[id] = {
			...obj
		}
		game.setItem( 'categoriesState', info )
	}

	/**
	 * Form submit handler
	 * @param {Event} e
	 */
	handleSubmit = e => {
		e.preventDefault()
		this.setState(prevState => ({
			currentQuestion: prevState.currentQuestion + 1
		}))

		// if no more question, remove category from categories playable
		// increment score somewhere and redirect to /

		const answer = this.$input.value
		if( answer === this.state.category.clues[this.state.currentQuestion].answer ) {
			console.log( 'GOOD!, increment score' )
			let score = game.getItem('score')
			score = score + 1
			const categoryScore = this.state.categoryScore + 1
			const categoryQuestion = this.state.currentQuestion + 1
			this.setState(prevState => ({ 
				score,
				categoryScore
			}), () => {
				const categoryInfo = {
					score: categoryScore,
					questions: categoryQuestion
				}
				this.setCategoryInfoById( this.state.category.id, categoryInfo )
			}) 

			game.setItem( 'score', score ) // updating the score in the localStorage

		}else {
			console.log('WRONG ANSWER, DECREMENT SCORE')
			let life = game.getItem( 'life' )
			life -= 1
			if( life <= 0 ) {
				this.setState({ gameOver: true })
			}
			this.setState({life}) // updating the life in the state
			game.setItem( 'life', life ) // updating the life in the localStorage
		}

		// saving the questionID and category score in localStorage


		this.$input.value = ""

		// Adding the category id to the nonPlayable key of the localStorage
		if(this.state.currentQuestion + 1 === this.state.category.clues_count) {
			const notPlayable = game.getItem('notPlayable') 
			const currentCategoryId = this.state.category.id
			const newNotPlayable = [
				...notPlayable,
				currentCategoryId
			]
			game.setItem( 'notPlayable', newNotPlayable )
		}
	}

	/**
	 * Get the HTMLElement of the input
	 * @param {HTMLElement} el
	 */
	getInputHTMLElement = el => {
		if(!el) return
		this.setState({ $input: el })
	}

	render() {
		const {
			category,
			currentQuestion,
			score, 
			categoryScore,
			life
		} = this.state
		// at first render, category will be null so we need to wait
		// before using data.
		if (!category) return <div>Please wait...</div>
		if( this.state.gameOver ) return <GameOverContainer />
		if( currentQuestion === category.clues_count ) {
			return (
				<Redirect to={{
					pathname: '/',
					state: { finishedCategory: true }
				}}/>
			)
		}

		return currentQuestion < category.clues_count && ( 
			<Category 
				category = { category }
				currentQuestionIndex = { currentQuestion }
				life={ life }
				score={ score }
				categoryScore={ categoryScore }
				handleSubmit = { this.handleSubmit }
				
				$input={ input => (this.$input = input)}
			/>
		)
	}
}

export default CategoryContainer