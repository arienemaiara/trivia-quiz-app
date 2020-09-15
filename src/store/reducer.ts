import produce from 'immer'

import { ApplicationState, ApplicationAction } from './types'

export const initialState: ApplicationState = {
  loading: false,
  quizQuestionList: [],
  currentQuestionIndex: 0,
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

    default:
      return state
  }
}

export default reducer
