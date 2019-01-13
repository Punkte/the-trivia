import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import game from '../../helpers/storage'

const Home = ({ categories, filter, playedMessage }) => (
  <section>
    <h1>Homepage</h1>
    <p>
      Your score : { game.getItem('score') }<br/>
      Your life : { game.getItem( 'life' ) }
    </p>

    {
      playedMessage && (
        <div>
          Please choose another category to play
        </div>
      )
    }
    { categories.length > 0 && (
      <section>
        {categories.map(category => (
          <div 
            played={ filter.includes( category.id ) ? 'true' : 'false' }
            key={category.id}
          >
            <Link 
              to={`/categories/${category.id}`} 
            >
              {category.title}
            </Link>
          </div>
        ))}
      </section>
    )}
  </section>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      clues_count: PropTypes.number
    }),
  ),
}

export default Home;