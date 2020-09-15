import React from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import InitialScreen from '../screens/InitialScreen'
import ChooseDifficultScreen from '../screens/ChooseDifficultScreen'
import QuizScreen from '../screens/QuizScreen'
import ResultScreen from '../screens/ResultScreen'

export type StackParamList = {
  Initial: undefined
  ChooseDifficult: undefined
  Quiz: undefined
  Result: undefined
}

const Stack = createStackNavigator<StackParamList>()

const options: StackNavigationOptions = {
  headerShown: false
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial" screenOptions={options}>
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen
          name="ChooseDifficult"
          component={ChooseDifficultScreen}
        />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
