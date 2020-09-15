import React from 'react'
import styled from 'styled-components/native'

type ButtonTextProps = {
  textColor: string
  fontSize: number
}

const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${(props) => props.fontSize + 'px'};
  /* font-family: 'poppinsbold'; */
  color: ${(props) => props.textColor};
  text-align: center;
`

type DefaultButtonProps = {
  text: string
  textColor: string
  backgroundColor: string
  size: 'small' | 'medium' | 'large'
  outline?: boolean
  onPress(): void
}

export const DefaultButton = ({
  text,
  textColor,
  backgroundColor,
  size,
  outline = false,
  onPress
}: DefaultButtonProps) => {
  const buttonBgColor = outline ? 'transparent' : backgroundColor
  const border = outline ? `4px solid ${backgroundColor}` : 'none'
  if (size === 'large') {
    return (
      <LargeButton
        backgroundColor={buttonBgColor}
        border={border}
        onPress={onPress}
      >
        <ButtonText textColor={textColor} fontSize={32}>
          {text}
        </ButtonText>
      </LargeButton>
    )
  } else if (size === 'medium') {
    return (
      <MediumButton
        backgroundColor={buttonBgColor}
        border={border}
        onPress={onPress}
      >
        <ButtonText textColor={textColor} fontSize={24}>
          {text}
        </ButtonText>
      </MediumButton>
    )
  } else {
    return (
      <SmallButton
        backgroundColor={buttonBgColor}
        border={border}
        onPress={onPress}
      >
        <ButtonText textColor={textColor} fontSize={20}>
          {text}
        </ButtonText>
      </SmallButton>
    )
  }
}

type ButtonProps = {
  backgroundColor: string
  border: string
}

const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => props.backgroundColor};
  margin: 10px 0;
  border-radius: 8px;
  border: ${(props) => props.border};
`

const SmallButton = styled(Button)`
  padding: 10px;
`

const MediumButton = styled(Button)`
  padding: 12px;
`

const LargeButton = styled(Button)`
  padding: 12px;
`
