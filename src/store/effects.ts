import { ThunkAction } from 'redux-thunk'

import { ApplicationState, ApplicationAction } from './types'
import { loadQuizRequest, loadQuizSuccess, loadQuizError } from './actions'
import * as quizService from '../services/quiz'

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>

export const loadQuiz = (): Effect => (dispatch, getState) => {
  dispatch(loadQuizRequest())

  const difficulty = getState().difficulty
  const quantity = getState().questionsQuantity

  return quizService
    .fetchQuizQuestions(difficulty, quantity)
    .then((questions) => dispatch(loadQuizSuccess(questions.results)))
    .catch(() => dispatch(loadQuizError()))
}
