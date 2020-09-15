import styled from 'styled-components/native'

export const DefaultText = styled.Text`
  font-family: 'poppins';
  color: ${({ theme }) => theme.primaryTextColor};
`

export const Title = styled(DefaultText)`
  font-family: 'poppinsbold';
  font-size: ${({ theme }) => theme.titleSize};
  text-align: center;
`

export const Subtitle = styled(DefaultText)`
  font-family: 'poppinsbold';
  font-size: ${({ theme }) => theme.subtitleSize};
  text-align: center;
`

export const SubtitleSecondary = styled(DefaultText)`
  font-family: 'poppinsbold';
  color: ${({ theme }) => theme.secondaryTextColor};
  font-size: ${({ theme }) => theme.subtitleSize};
  text-align: center;
`
