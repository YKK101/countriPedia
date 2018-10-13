import styled from 'styled-components'

const Background = styled.View`
  flex: 1;
  background-color: ${props => props.backgroundColor || props.theme.background};
`

export default Background
