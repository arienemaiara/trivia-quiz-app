import React, { useContext, useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { ThemeContext } from 'styled-components'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { StackParamList } from '../navigation/MainNavigator'
import { Wrapper, Container, QuestionResult } from '../components/Wrappers'
import { Subtitle, Title, CustomText } from '../components/Texts'
import Right from '../components/icons/Right'
import Wrong from '../components/icons/Wrong'
import Ellipse from '../components/layout/Ellipse'

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Result'>
  route: RouteProp<StackParamList, 'Result'>
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

function ResultScreen({ navigation, route }: Props) {
  const themeContext = useContext(ThemeContext)

  const handlePlayAgainPress = () => {
    navigation.navigate('Initial')
  }

  const QuestionResultItem = () => {
    return (
      <QuestionResult>
        <View
          style={{
            marginHorizontal: 5
          }}
        >
          <Wrong size={32} color={themeContext.red} />
        </View>
        <CustomText fontSize={13}>
          In 1993 Swedish car manufacturer Saab experimented with replacing the
          steering wheel with a joystick in a Saab 9000.
        </CustomText>
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
          <Title>🥳</Title>
          <Subtitle>You scored</Subtitle>
          <Subtitle>3 / 10</Subtitle>
        </View>
        <View>
          <QuestionResultItem />
          <QuestionResultItem />
          <QuestionResultItem />
          <QuestionResultItem />
        </View>
        <TouchableOpacity onPress={handlePlayAgainPress}>
          <Title>PLAY AGAIN?</Title>
        </TouchableOpacity>
      </Container>
    </Wrapper>
  )
}

export default ResultScreen
