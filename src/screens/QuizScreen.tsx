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

import { ApplicationState } from '../store/types'
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

  const handleAnswerPress = (answer: boolean) => {}

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
            <CustomText textColor="white" fontSize={20}>
              In 1993 Swedish car manufacturer Saab experimented with replacing
              the steering wheel with a joystick in a Saab 9000.
            </CustomText>
          </QuestionBox>
          <DefaultButton
            text="True"
            textColor={themeContext.green}
            backgroundColor={themeContext.green}
            size="small"
            outline
            onPress={() => handleAnswerPress(true)}
          />
          <DefaultButton
            text="False"
            textColor={themeContext.red}
            backgroundColor={themeContext.red}
            size="small"
            outline
            onPress={() => handleAnswerPress(false)}
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
