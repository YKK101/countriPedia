import styled from 'styled-components'

const Title = styled.Text`
  color: ${props => props.theme.text};
  font-size: 20px;
  text-align: ${props => props.textAlign || 'left'};
`

export default Title
