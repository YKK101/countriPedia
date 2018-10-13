import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import {
  Background,
  Error,
  Loading,
} from '@components'

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
      if (loading) { return <Loading /> }
      if (error) { return <Error /> }
      if (data.countries) { return <Countries data={data.countries} /> }

      return <Error />
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
