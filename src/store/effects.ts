import { ThunkAction } from 'redux-thunk'

import { ApplicationState, ApplicationAction } from './types'
import { loadQuizRequest, loadQuizSuccess, loadQuizError } from './actions'
import * as quizService from '../services/quiz'

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>

const loadQuiz = (): Effect => (dispatch, getState) => {
  dispatch(loadQuizRequest())

  return quizService
    .fetchQuizQuestions()
    .then((questions) => dispatch(loadQuizSuccess(questions)))
    .catch(() => dispatch(loadQuizError()))
}
