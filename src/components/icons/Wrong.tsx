import React from 'react'
import Svg, { Path } from 'react-native-svg'

type IconProps = {
  color: string
  size: number
}

const Wrong = ({ color, size }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size + 2} ${size + 2}`}
      fill="none"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 3.5C9.54416 3.5 3.5 9.54416 3.5 17C3.5 24.4558 9.54416 30.5 17 30.5C24.4558 30.5 30.5 24.4558 30.5 17C30.5 9.54416 24.4558 3.5 17 3.5ZM0.5 17C0.5 7.8873 7.8873 0.5 17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.5607 11.4393C23.1464 12.0251 23.1464 12.9749 22.5607 13.5607L13.5607 22.5607C12.9749 23.1464 12.0251 23.1464 11.4393 22.5607C10.8536 21.9749 10.8536 21.0251 11.4393 20.4393L20.4393 11.4393C21.0251 10.8536 21.9749 10.8536 22.5607 11.4393Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4393 11.4393C12.0251 10.8536 12.9749 10.8536 13.5607 11.4393L22.5607 20.4393C23.1464 21.0251 23.1464 21.9749 22.5607 22.5607C21.9749 23.1464 21.0251 23.1464 20.4393 22.5607L11.4393 13.5607C10.8536 12.9749 10.8536 12.0251 11.4393 11.4393Z"
        fill={color}
      />
    </Svg>
  )
}

export default Wrong
