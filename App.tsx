import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import { ThemeProvider } from 'styled-components/native'
import MainNavigator from './src/navigation/MainNavigator'

import { lightTheme } from './src/styles/theme'

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

  return (
    <ThemeProvider theme={lightTheme}>
      <MainNavigator />
    </ThemeProvider>
  )
}
