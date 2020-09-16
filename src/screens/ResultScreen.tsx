import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { ThemeContext } from 'styled-components'
import { StackNavigationProp } from '@react-navigation/stack'

import { StackParamList } from '../navigation/MainNavigator'
import { Wrapper, Container, QuestionResult } from '../components/Wrappers'
import { Subtitle, Title, CustomText } from '../components/Texts'
import Right from '../components/icons/Right'
import Wrong from '../components/icons/Wrong'
import Ellipse from '../components/layout/Ellipse'

import { replaceEncondedStrings } from '../utils/helpers'

import { ApplicationState, QuestionAnswer } from '../store/types'
import { restartGame } from '../store/actions'

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Result'>
}

const RESULT_EMOJI = [
  { result: 0, emoji: '😢' },
  { result: 1, emoji: '😢' },
  { result: 2, emoji: '😢' },
  { result: 3, emoji: '😢' },
  { result: 4, emoji: '😢' },
  { result: 5, emoji: '🙁' },
  { result: 6, emoji: '😐' },
  { result: 7, emoji: '😊' },
  { result: 8, emoji: '😄' },
  { result: 9, emoji: '🤩' },
  { result: 10, emoji: '🥳' }
]

function ResultScreen({ navigation }: Props) {
  const dispatch = useDispatch()
  const themeContext = useContext(ThemeContext)

  const { score, answers } = useSelector((state: ApplicationState) => state)

  const handlePlayAgainPress = () => {
    dispatch(restartGame())
    navigation.navigate('Initial')
  }

  const QuestionResultItem = (answer: QuestionAnswer) => {
    return (
      <QuestionResult>
        <View
          style={{
            marginRight: 10
          }}
        >
          {answer.correct ? (
            <Right size={32} color={themeContext.green} />
          ) : (
            <Wrong size={32} color={themeContext.red} />
          )}
        </View>
        <View
          style={{
            flex: 1
          }}
        >
          <CustomText fontSize={14}>
            {replaceEncondedStrings(answer.question)}
          </CustomText>
        </View>
      </QuestionResult>
    )
  }

  const BottomEllipse = () => {
    return (
      <View style={{ position: 'absolute', bottom: -60, left: -60 }}>
        <Ellipse startColor={themeContext.purple} endColor={themeContext.red} />
      </View>
    )
  }

  const TopEllipse = () => {
    return (
      <View style={{ position: 'absolute', top: -40, right: -40 }}>
        <Ellipse
          startColor={themeContext.blue}
          endColor={themeContext.blueLight}
        />
      </View>
    )
  }

  return (
    <Wrapper>
      <BottomEllipse />
      <TopEllipse />
      <Container justifyContent="space-between">
        <View>
          <Title>{RESULT_EMOJI.find((el) => el.result === score)?.emoji}</Title>
          <Subtitle>You scored</Subtitle>
          <Subtitle>{score} / 10</Subtitle>
        </View>
        <View
          style={{
            marginTop: 30,
            flex: 1
          }}
        >
          <FlatList
            data={answers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => QuestionResultItem(item)}
            ListFooterComponent={
              <TouchableOpacity
                onPress={handlePlayAgainPress}
                style={{ marginVertical: 20 }}
              >
                <Title>PLAY AGAIN?</Title>
              </TouchableOpacity>
            }
          />
        </View>
      </Container>
    </Wrapper>
  )
}

export default ResultScreen
