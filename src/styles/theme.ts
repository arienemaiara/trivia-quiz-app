import { DefaultTheme } from 'styled-components/native'

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string
    primaryTextColor: string
    secondaryTextColor: string
    gray: string
    green: string
    greenLight: string
    yellow: string
    red: string
    orange: string
    blue: string
    blueLight: string
    purple: string
    titleSize: string
    subtitleSize: string
    textSize: string
  }
}

export const lightTheme: DefaultTheme = {
  backgroundColor: '#F9F9F9',
  primaryTextColor: '#373A4D',
  secondaryTextColor: '#676D8E',
  gray: '#E5E5E5',
  green: '#27AE60',
  greenLight: '#4BC250',
  yellow: '#F2C94C',
  red: '#EB5757',
  orange: '#F2994A',
  blue: '#2F80ED',
  blueLight: '#56CCF2',
  purple: '#9B51E0',
  titleSize: '32px',
  subtitleSize: '22px',
  textSize: '18px'
}
