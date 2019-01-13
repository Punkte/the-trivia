import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ category,
  currentQuestionIndex,
  handleSubmit, 
  $input,
  life,
  score,
  categoryScore
}) => {
  const currentQuestion = category.clues[currentQuestionIndex]
  return (
    <section>
      <form onSubmit={ handleSubmit }>
        <h1>You choosed: { category.title }</h1>
        life: { life }<br/>
        score : { score }<br/>
        categoryScore: { categoryScore }
        <div className="question">
          <h3 className="question__title">
            {currentQuestion.question}
          </h3>
          <div className="question__answerInput">
            <input ref={ $input } />
          </div>
          <button className="question__submit" type="submit">
            Next
          </button>
        </div>
      </form>
    </section>
  )
}

Category.propTypes = {
  category: PropTypes.shape({}).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default Category