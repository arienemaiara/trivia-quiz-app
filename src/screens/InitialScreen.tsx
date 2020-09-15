import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { StackNavigationProp } from '@react-navigation/stack'
import { View } from 'react-native'

import { StackParamList } from '../navigation/MainNavigator'
import { Wrapper, Container } from '../components/Wrappers'
import { Title, Subtitle } from '../components/Texts'
import { DefaultButton } from '../components/Buttons'
import Ellipse from '../components/layout/Ellipse'
import Star from '../components/layout/Star'

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Initial'>
}

function InitialScreen({ navigation }: Props) {
  const themeContext = useContext(ThemeContext)

  const handleBeginButtonPress = (): void => {
    navigation.navigate('ChooseDifficulty')
  }

  const TopEllipse = () => {
    return (
      <View style={{ position: 'absolute', top: -30, right: -60 }}>
        <Ellipse
          startColor={themeContext.orange}
          endColor={themeContext.yellow}
        />
      </View>
    )
  }

  const BottomEllipse = () => {
    return (
      <View style={{ position: 'absolute', bottom: -30, right: -60 }}>
        <Ellipse
          startColor={themeContext.blueLight}
          endColor={themeContext.blue}
        />
      </View>
    )
  }

  const MiddleStar = () => {
    return (
      <View style={{ position: 'absolute', bottom: '50%', left: -60 }}>
        <Star startColor={themeContext.purple} endColor={themeContext.red} />
      </View>
    )
  }

  return (
    <Wrapper>
      <TopEllipse />
      <MiddleStar />
      <BottomEllipse />
      <Container padding={40} justifyContent="space-between">
        <Title>Welcome to the Trivia Challenge</Title>
        <Subtitle style={{ marginHorizontal: 20 }}>
          You will be presented with 10 True or False questions.
        </Subtitle>
        <Subtitle>Can you score 100%?</Subtitle>
        <DefaultButton
          text="Begin"
          textColor="#FFF"
          backgroundColor={themeContext.green}
          size="medium"
          onPress={handleBeginButtonPress}
        />
      </Container>
    </Wrapper>
  )
}

export default InitialScreen
