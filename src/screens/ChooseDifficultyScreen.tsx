import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { View } from 'react-native'
import { ThemeContext } from 'styled-components'
import { StackNavigationProp } from '@react-navigation/stack'

import { StackParamList } from '../navigation/MainNavigator'
import { Wrapper, Container } from '../components/Wrappers'
import { SubtitleSecondary } from '../components/Texts'
import { DefaultButton } from '../components/Buttons'
import Star from '../components/layout/Star'

import { setDifficulty } from '../store/actions'

type Props = {
  navigation: StackNavigationProp<StackParamList, 'ChooseDifficulty'>
}

function ChooseDifficultScreen({ navigation }: Props) {
  const dispatch = useDispatch()
  const themeContext = useContext(ThemeContext)

  const handleDifficultyPress = (level: string): void => {
    dispatch(setDifficulty(level.toLowerCase()))
    navigation.navigate('Quiz', { level })
  }

  const BottomStar = () => {
    return (
      <View style={{ position: 'absolute', bottom: -20, right: -60 }}>
        <Star startColor={themeContext.purple} endColor={themeContext.red} />
      </View>
    )
  }

  return (
    <Wrapper>
      <BottomStar />
      <Container>
        <SubtitleSecondary style={{ height: 100 }}>
          CHOOSE DIFFICULTY:
        </SubtitleSecondary>
        <View>
          <DefaultButton
            text="Easy"
            textColor="#FFF"
            backgroundColor={themeContext.greenLight}
            size="large"
            onPress={() => handleDifficultyPress('Easy')}
          />
          <DefaultButton
            text="Medium"
            textColor="#FFF"
            backgroundColor={themeContext.yellow}
            size="large"
            onPress={() => handleDifficultyPress('Medium')}
          />
          <DefaultButton
            text="Hard"
            textColor="#FFF"
            backgroundColor={themeContext.red}
            size="large"
            onPress={() => handleDifficultyPress('Hard')}
          />
        </View>
      </Container>
    </Wrapper>
  )
}

export default ChooseDifficultScreen
