import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Background } from '@components'

const query = gql`
{
  countries {
    code
    name
    native
    emoji
  }
}
`

class Countries extends PureComponent {
  render() {
    console.warn(this.props.data)
    return (
      <Background />
    )
  }
}

const CountriesContainer = () => (
  <Query query={query}>
    { ({ loading, error, data }) => {
      if (loading) { return <Text>Loading . . .</Text> }
      if (error) { return <Text>{`Some error occur !\n${JSON.stringify(error, null, 4)}`}</Text> }
      if (data.countries) { return <Countries data={data.countries} /> }

      return <Text>Some error occur !</Text>
    }}
  </Query>
)

Countries.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
  })),
}

Countries.defaultProps = {
  data: [],
}

export { Countries }
export default CountriesContainer
