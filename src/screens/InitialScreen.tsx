import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { StackNavigationProp } from '@react-navigation/stack'

import { StackParamList } from '../navigation/MainNavigator'
import { Wrapper, Container } from '../components/Wrappers'
import { Title, Subtitle } from '../components/Texts'
import { DefaultButton } from '../components/Buttons'

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Initial'>
}

function InitialScreen({ navigation }: Props) {
  const themeContext = useContext(ThemeContext)

  const handleBeginButtonPress = (): void => {
    navigation.navigate('ChooseDifficult')
  }

  return (
    <Wrapper>
      <Container padding={40} justifyContent="space-between">
        <Title>Welcome to the Trivia Challenge</Title>
        <Subtitle>
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
