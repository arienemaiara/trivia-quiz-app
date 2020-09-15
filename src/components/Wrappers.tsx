import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
`

type ContainerProps = {
  padding?: number
  alignItems?: string
  justifyContent?: string
}
export const Container = styled.View<ContainerProps>`
  flex: 1;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  padding: ${(props) => (props.padding ? props.padding + 'px' : '20px')};
`

export const QuestionBox = styled.View`
  align-items: center;
  min-height: 200px;
  background-color: ${({ theme }) => theme.blue};
  margin: 40px 0 15px 0;
  padding: 12px;
  border-radius: 8px;
`
