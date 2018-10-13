import React, { PureComponent } from 'react'
import styled from 'styled-components'
import strings from '@constants/strings'
import Background from './Background'
import Title from './Title'

const ThemedActivityIndicator = styled.ActivityIndicator.attrs({
  color: props => props.theme.primary,
  size: 'large',
})`
  padding: 16px;
`

class Loading extends PureComponent {
  render() {
    return (
      <Background
        justifyContent="center"
        alignItems="center"
      >
        <ThemedActivityIndicator />
        <Title>{strings.loading}</Title>
      </Background>
    )
  }
}

export default Loading
