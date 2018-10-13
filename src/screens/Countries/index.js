import React, { PureComponent } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { List } from 'react-native-paper'
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
    flagCode: emoji
  }
}
`

class Countries extends PureComponent {
  renderCountryFlag = (flagCode) => {
    return (
      <View style={styles.leftItem}>
        <Text style={styles.flagIcon}>{flagCode}</Text>
      </View>
    )
  }

  renderCountryItem = ({ item }) => {
    return (
      <List.Item
        title={item.native}
        description={item.name}
        left={() => this.renderCountryFlag(item.flagCode)}
      />
    )
  }

  render() {
    return (
      <Background>
        <FlatList
          style={styles.countryList}
          data={this.props.data}
          renderItem={this.renderCountryItem}
          keyExtractor={(item) => item.code}
        />
      </Background>
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
    flagCode: PropTypes.string.isRequired,
  })),
}

Countries.defaultProps = {
  data: [],
}

const styles = StyleSheet.create({
  countryList: {
    flex: 1,
  },
  leftItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  flagIcon: {
    fontSize: 32,
  }
})

export { Countries }
export default CountriesContainer
