import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { CategoryForm, Info, QuestionContainer, CategoryContainer, Header, StyledLink } from './styled'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faHeart, faQuestion, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faGamepad, faHeart, faQuestion, faArrowCircleLeft)



const Category = ({ category,
  currentQuestionIndex,
  handleSubmit, 
  $input,
  life,
  score,
  categoryScore,
  resetGame
}) => {
  const ResetButton = withRouter(({ history }) => (
    <button
        onClick={() => { 
            history.push('/') 
            resetGame()
        }}
    >
    Reset Game
    </button>
  ))
  const currentQuestion = category.clues[currentQuestionIndex]
  return (
    <section>
      <Header>
        <Link to={'/'}>
          <StyledLink>
            <FontAwesomeIcon icon="arrow-circle-left" size="lg" color="black"/> <h2> Go Home</h2>
          </StyledLink>
        </Link>
        <Info>
          <div title="Global life">
            <FontAwesomeIcon icon="heart" /> Life : { life }<br/>
          </div>
          <div title="Global score">
            <FontAwesomeIcon icon="gamepad" /> Global score : { score } { (score !== 0 && score % 10 === 0) && (  // if the score is a multiple of ten
              <span>
              { /* Begin French touch */ }
              T'es un winner continue comme ça mon pote plus que 10
              { /* End French touch */ }
            </span>
            )} <br/>

          </div>
          <div title="Category score">
            <FontAwesomeIcon icon="question"/> Category Score : { categoryScore }
          </div>
          <ResetButton  />
        </Info>
      </Header>

      <CategoryContainer>
        <CategoryForm onSubmit={ handleSubmit }>
          <h1>You choosed: { category.title }</h1>

          <QuestionContainer className="question">
            <h3 className="question__title">
              {currentQuestion.question}
            </h3>
            <div className="question__answerInput">
              <input ref={ $input } autoFocus />
            </div>
            <button className="question__submit" type="submit">
              Next
            </button>
          </QuestionContainer>
        </CategoryForm>
      </CategoryContainer>
    </section>
  )
}

Category.propTypes = {
  category: PropTypes.shape({}).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default Category