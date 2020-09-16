import React, { useContext, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View } from 'react-native'
import { ThemeContext } from 'styled-components'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { StackParamList } from '../navigation/MainNavigator'
import { Wrapper, Container, QuestionBox } from '../components/Wrappers'
import { Subtitle, SecondaryText, CustomText } from '../components/Texts'
import { DefaultButton } from '../components/Buttons'

import { replaceEncondedStrings } from '../utils/helpers'

import { ApplicationState, QuizQuestion } from '../store/types'
import {
  setNextQuestion,
  updateQuestionAnswer,
  updateScore
} from '../store/actions'
import { loadQuiz } from '../store/effects'

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Quiz'>
  route: RouteProp<StackParamList, 'Quiz'>
}

function QuizScreen({ navigation, route }: Props) {
  const dispatch = useDispatch()
  const [difficulty, setDifficulty] = useState(route.params.level)
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>()

  const themeContext = useContext(ThemeContext)

  const {
    loading,
    quizQuestionList,
    questionsQuantity,
    currentQuestionIndex
  } = useSelector((state: ApplicationState) => state)

  useEffect(() => {
    dispatch(loadQuiz())
  }, [])

  useEffect(() => {
    setCurrentQuestion(quizQuestionList[currentQuestionIndex - 1])
  }, [quizQuestionList, currentQuestionIndex])

  const handleAnswerPress = (answer: string) => {
    const isAnswerCorrect = currentQuestion?.correct_answer === answer

    if (isAnswerCorrect) {
      dispatch(updateScore(1))
    }

    dispatch(
      updateQuestionAnswer({
        correct: isAnswerCorrect,
        question: currentQuestion?.question || ''
      })
    )

    if (currentQuestionIndex === questionsQuantity) {
      onLastQuestionAnswered()
    } else {
      dispatch(setNextQuestion())
    }
  }

  const onLastQuestionAnswered = () => {
    navigation.navigate('Result')
  }

  return (
    <Wrapper>
      <Container padding={30} justifyContent="space-between">
        <View>
          <Subtitle>Entertainment: Video Games</Subtitle>
          <SecondaryText>Difficulty: {difficulty}</SecondaryText>

          <QuestionBox>
            {currentQuestion && (
              <CustomText textColor="white" fontSize={20}>
                {replaceEncondedStrings(currentQuestion.question)}
              </CustomText>
            )}
          </QuestionBox>
          <DefaultButton
            text="True"
            textColor={themeContext.green}
            backgroundColor={themeContext.green}
            size="small"
            outline
            onPress={() => handleAnswerPress('True')}
          />
          <DefaultButton
            text="False"
            textColor={themeContext.red}
            backgroundColor={themeContext.red}
            size="small"
            outline
            onPress={() => handleAnswerPress('False')}
          />
        </View>
        <SecondaryText>
          Question: {currentQuestionIndex}/{questionsQuantity}
        </SecondaryText>
      </Container>
    </Wrapper>
  )
}

export default QuizScreen
