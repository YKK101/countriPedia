import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import strings from '@constants/strings'
import Background from './Background'
import Title from './Title'

class Error extends PureComponent {
  render() {
    const { title } = this.props
    return (
      <Background
        justifyContent="center"
        alignItems="center"
        padding={16}
      >
        <Title textAlign="center">{title}</Title>
      </Background>
    )
  }
}

Error.propTypes = {
  title: PropTypes.string,
}

Error.defaultProps = {
  title: strings.error,
}

export default Error
