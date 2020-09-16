import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

type LoadingProps = {
  color: string
}

const Loading = ({ color }: LoadingProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 10,
    backgroundColor: 'white',
    opacity: 0.5
  }
})

export default Loading
