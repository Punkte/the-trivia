import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import game from '../../helpers/storage'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faHeart, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { Header, Info, ListContainer, ListItem } from './styled'

library.add(faGamepad, faHeart, faQuestion )




const Home = ({ categories, filter, playedMessage }) => (
  <section>
    <Header>
      <h1>The Trivia</h1>
      <Info>
          <div title="Global life">
            <FontAwesomeIcon icon="heart" /> Life : { game.getItem('score') }<br/>
          </div>
          <div title="Global score">
            <FontAwesomeIcon icon="gamepad" /> Global score : { game.getItem( 'life' ) } { (game.getItem( 'life' ) !== 0 && game.getItem( 'life' ) % 10 === 0) && (  // if the score is a multiple of ten
              <span>
                { /* Begin French touch */ }
                T'es un winner continue comme ça mon pote plus que 10
                { /* End French touch */ }
              </span>
            )} <br/>
          </div>
        </Info>
    </Header>
    {
      playedMessage && (
        <div>
          Please choose a category to play
        </div>
      )
    }
    { categories.length > 0 && (
      <ListContainer>
        {categories.map(category => (
          <div key={category.id}>
            { !filter.includes( category.id ) 
            ? (
              <ListItem key={category.id}>
                <Link 
                  to={`/categories/${category.id}`} 
                >
                  {category.title}
                </Link>
              </ListItem>
            )
            : (
              <ListItem key={category.id} played><span>{category.title}</span></ListItem>
            )
          }
          </div>
        ))}
      </ListContainer>
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