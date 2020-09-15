import produce from 'immer'

import { ApplicationState, ApplicationAction } from './types'

export const initialState: ApplicationState = {
  loading: false,
  questionsQuantity: 10,
  quizQuestionList: [],
  answers: [],
  difficulty: 'easy',
  currentQuestionIndex: 1,
  score: 0
}

const reducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case 'getQuizQuestionsRequest':
      return produce(state, (draft) => {
        draft.loading = true
      })

    case 'getQuizQuestionsSuccess':
      return produce(state, (draft) => {
        draft.loading = false
        draft.quizQuestionList = action.questions
      })

    case 'getQuizQuestionsError':
      return produce(state, (draft) => {
        draft.loading = false
      })

    case 'setDifficulty':
      return produce(state, (draft) => {
        draft.difficulty = action.difficulty
      })

    case 'setNextQuestion':
      return produce(state, (draft) => {
        draft.currentQuestionIndex += 1
      })

    case 'updateScore':
      return produce(state, (draft) => {
        draft.score += action.score
      })

    case 'restartGame':
      return produce(state, (draft) => {
        draft = { ...initialState }
      })

    default:
      return state
  }
}

export default reducer
