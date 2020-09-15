import {
  QuizQuestion,
  QuestionAnswer,
  LoadQuizRequest,
  LoadQuizSuccess,
  LoadQuizError,
  SetDifficulty,
  UpdateQuestionAnswer,
  SetNextQuestion,
  UpdateScore,
  RestartGame
} from './types'

export const loadQuizRequest = (): LoadQuizRequest => ({
  type: 'getQuizQuestionsRequest'
})

export const loadQuizSuccess = (
  questions: QuizQuestion[]
): LoadQuizSuccess => ({
  type: 'getQuizQuestionsSuccess',
  questions
})

export const loadQuizError = (): LoadQuizError => ({
  type: 'getQuizQuestionsError'
})

export const updateQuestionAnswer = (
  answer: QuestionAnswer
): UpdateQuestionAnswer => ({
  type: 'updateQuestionAnswer',
  answer
})

export const setDifficulty = (difficulty: string): SetDifficulty => ({
  type: 'setDifficulty',
  difficulty
})

export const setNextQuestion = (): SetNextQuestion => ({
  type: 'setNextQuestion'
})

export const updateScore = (score: number): UpdateScore => ({
  type: 'updateScore',
  score
})

export const restartGame = (): RestartGame => ({
  type: 'restartGame'
})
