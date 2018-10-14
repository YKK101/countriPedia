import React, { PureComponent } from 'react'
import {
  Background,
} from '@components'
import strings from '@constants/strings'

class Detail extends PureComponent {
  render() {
    return (
      <Background />
    )
  }
}

class DetailContainer extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', strings.detialTitle),
  })

  render() {
    return (
      <Detail />
    )
  }
}

export { Detail }
export default DetailContainer
