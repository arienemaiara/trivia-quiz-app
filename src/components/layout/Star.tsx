import React from 'react'
import Svg, { Path, Circle, Defs, Stop, LinearGradient } from 'react-native-svg'

type StarProps = {
  startColor: string
  endColor: string
}

const Star = ({ startColor, endColor }: StarProps) => {
  return (
    <Svg width="182" height="175" viewBox="0 0 182 175" fill="none">
      <Path
        d="M60.4712 18.8214C73.1918 -6.10481 108.808 -6.10482 121.529 18.8214L123.243 22.1812C128.224 31.9398 137.569 38.7296 148.389 40.4504L152.114 41.0429C179.751 45.4383 190.757 79.3115 170.982 99.1122L168.316 101.781C160.574 109.533 157.005 120.519 158.712 131.341L159.299 135.067C163.659 162.71 134.845 183.645 109.903 170.956L106.541 169.246C96.7757 164.278 85.2243 164.278 75.4593 169.246L72.0973 170.956C47.1548 183.645 18.3405 162.71 22.7005 135.067L23.2882 131.341C24.9952 120.519 21.4256 109.533 13.6835 101.781L11.018 99.1122C-8.7573 79.3115 2.24875 45.4383 29.8858 41.0429L33.6111 40.4504C44.4311 38.7296 53.7764 31.9398 58.7565 22.1812L60.4712 18.8214Z"
        fill="url(#grad)"
      />
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={startColor} stopOpacity="1" />
          <Stop offset="1" stopColor={endColor} stopOpacity="1" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Star
