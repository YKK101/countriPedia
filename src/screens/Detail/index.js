import React, { PureComponent } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import {
  Background,
  Error,
  Loading,
  Title,
  Text,
} from '@components'
import strings from '@constants/strings'
import countryREST from '@api/countryREST'

const path = '/alpha'
const query = gql`
  query country($path: String!) {
    country @rest(type: "Country", path: $path) {
      name
      nativeName
      capital
      region
      population
      latlng
      currencies @type(name: "Currency") {
        code
        name
        symbol
      }
      languages @type(name: "Language") {
        code
        name
        nativeName
      }
    }
  }
`

class Detail extends PureComponent {
  render() {
    const { data } = this.props
    return (
      <Background padding={16}>
        <Title>Name: <Text>{`${data.nativeName} (${data.name})`}</Text></Title>
        <Title>Region: <Text>{data.region}</Text></Title>
        <Title>Capital: <Text>{data.capital}</Text></Title>
        <Title>Population: <Text>{data.population}</Text></Title>
        { data.currencies && data.currencies.length > 0  && (
          data.currencies.map((item, index) => (
            <Title key={item.code} >Currency [{index + 1}]: <Text>{`${item.name} ${item.symbol ? `(${item.symbol})` : ''}`}</Text></Title>
          )))
        }
        { data.languages && data.languages.length > 0 &&
          data.languages.map((item, index) => (
            <Title key={item.code}>Language [{index + 1}]: <Text>{`${item.nativeName} (${item.name})`}</Text></Title>
          ))
        }
      </Background>
    )
  }
}

class DetailContainer extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', strings.detialTitle),
  })

  render() {
    const { navigation } = this.props

    return (
      <Query client={countryREST} query={query} variables={{ path: `${path}/${navigation.getParam('code')}` }} fetchPolicy="network-only">
        { ({loading, error, data, networkStatus }) => {
          if (networkStatus === 8) { return <Error title={strings.networkError} /> } // Network Error
          if (loading) { return <Loading /> }
          if (error) { return <Error /> }
          if (data.country) { return <Detail data={data.country} />}

          return <Error />
        }}
      </Query>
    )
  }
}

export { Detail }
export default DetailContainer
