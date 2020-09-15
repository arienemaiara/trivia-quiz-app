import React from 'react'
import styled from 'styled-components/native'

type DefaultButtonProps = {
  text: string
  textColor: string
  backgroundColor: string
  size: 'small' | 'medium' | 'large'
  onPress(): void
}

export const DefaultButton = ({
  text,
  textColor,
  backgroundColor,
  size,
  onPress
}: DefaultButtonProps) => {
  if (size === 'large') {
    return (
      <LargeButton backgroundColor={backgroundColor} onPress={onPress}>
        <ButtonText textColor={textColor} fontSize={32}>
          {text}
        </ButtonText>
      </LargeButton>
    )
  } else if (size === 'medium') {
    return (
      <MediumButton backgroundColor={backgroundColor} onPress={onPress}>
        <ButtonText textColor={textColor} fontSize={24}>
          {text}
        </ButtonText>
      </MediumButton>
    )
  } else {
    return (
      <SmallButton backgroundColor={backgroundColor} onPress={onPress}>
        <ButtonText textColor={textColor} fontSize={18}>
          {text}
        </ButtonText>
      </SmallButton>
    )
  }
}

type ButtonProps = {
  backgroundColor: string
}

const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  margin: 10px 0;
`

const SmallButton = styled(Button)`
  padding: 10px;
`

const MediumButton = styled(Button)`
  padding: 15px;
`

const LargeButton = styled(Button)`
  padding: 12px;
`

type ButtonTextProps = {
  textColor: string
  fontSize: number
}

const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${(props) => props.fontSize + 'px'};
  font-family: 'poppinsbold';
  color: ${(props) => props.textColor};
  text-transform: uppercase;
  text-align: center;
`
