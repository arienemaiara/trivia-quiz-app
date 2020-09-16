import React, { useEffect, useState } from 'react'
import { AppLoading } from 'expo'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import * as Font from 'expo-font'
import { ThemeProvider } from 'styled-components/native'

import reducer, { initialState } from './src/store/reducer'

import MainNavigator from './src/navigation/MainNavigator'
import { lightTheme } from './src/styles/theme'

const store = createStore(reducer, initialState, applyMiddleware(thunk))

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          poppins: require('./assets/fonts/Poppins-Regular.ttf'),
          poppinsbold: require('./assets/fonts/Poppins-Bold.ttf')
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setLoadingComplete(true)
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  if (!isLoadingComplete) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <MainNavigator />
      </ThemeProvider>
    </Provider>
  )
}
