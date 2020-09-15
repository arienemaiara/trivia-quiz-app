import React, { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from 'styled-components'
import { StackNavigationProp } from '@react-navigation/stack'

import { StackParamList } from '../navigation/MainNavigator'
import { Wrapper, Container } from '../components/Wrappers'
import { SubtitleSecondary } from '../components/Texts'
import { DefaultButton } from '../components/Buttons'

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Initial'>
}

function ChooseDifficultScreen({ navigation }: Props) {
  const themeContext = useContext(ThemeContext)

  const handleDifficultyPress = (level: string): void => {
    navigation.navigate('Quiz')
  }

  return (
    <Wrapper>
      <Container>
        <SubtitleSecondary style={{ height: 100 }}>
          CHOOSE DEFFICULTY:
        </SubtitleSecondary>
        <View>
          <DefaultButton
            text="Easy"
            textColor="#FFF"
            backgroundColor={themeContext.greenLight}
            size="large"
            onPress={() => handleDifficultyPress('easy')}
          />
          <DefaultButton
            text="Medium"
            textColor="#FFF"
            backgroundColor={themeContext.yellow}
            size="large"
            onPress={() => handleDifficultyPress('medium')}
          />
          <DefaultButton
            text="Hard"
            textColor="#FFF"
            backgroundColor={themeContext.red}
            size="large"
            onPress={() => handleDifficultyPress('hard')}
          />
        </View>
      </Container>
    </Wrapper>
  )
}

export default ChooseDifficultScreen
