import React from 'react'
import Svg, { Circle, Defs, Stop, LinearGradient } from 'react-native-svg'

type EllipseProps = {
  startColor: string
  endColor: string
}

const Ellipse = ({ startColor, endColor }: EllipseProps) => {
  return (
    <Svg width="200" height="200" viewBox="0 0 200 200" fill="none">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={startColor} stopOpacity="1" />
          <Stop offset="1" stopColor={endColor} stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Circle cx="100" cy="100" r="100" fill="url(#grad)" />
    </Svg>
  )
}

export default Ellipse
