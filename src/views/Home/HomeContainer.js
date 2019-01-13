import React, {
	Component
} from 'react';
import Home from './Home';
import api from '../../helpers/api';
import game from '../../helpers/storage'

class HomeContainer extends Component {
	
	constructor( props ) {
		super( props )
		if( this.props.location ) {
			this.state = {
				categories: [],
				playedMessage: false
			}
		}
	}
	async componentDidMount() {
		const data = await api.getCategories()
		const filter = game.getItem('notPlayable')
		// const newData = this.categoriesFilter(data, filter)
		
		this.setState({
			categories: data,
			filter
		})

	}

	categoriesFilter(data, filterArray) {
		return data.filter( d => !filterArray.includes(d.id)) 
	}

	render() {
		return ( 
			<Home 
				categories = { this.state.categories }
				filter = { this.state.filter }
				playedMessage = { this.state.playedMessage }
			/>
		);
	}
}

export default HomeContainer;