import React, { PureComponent, Fragment } from 'react'
import {
  FlatList,
  SafeAreaView,
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
import strings from '@constants/strings'

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
      <Fragment>
        <List.Item
          title={item.native}
          description={item.name}
          left={() => this.renderCountryFlag(item.flagCode)}
          onPress={() => this.props.navigation.navigate({
            routeName: 'detail',
            params: { code: item.code, title: item.native }
          })}
        />
        <SafeAreaView />
      </Fragment>
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

class CountriesContainer extends PureComponent {
  static navigationOptions = {
    title: strings.countriesTitle
  }
  
  render() {
    return (
      <Query query={query} notifyOnNetworkStatusChange>
        { ({ loading, error, data, networkStatus }) => {
          if (networkStatus === 8) { return <Error title={strings.networkError} /> } // Network Error
          if (loading) { return <Loading /> }
          if (error) { return <Error /> }
          if (data.countries) { return <Countries data={data.countries} navigation={this.props.navigation} /> }

          return <Error />
        }}
      </Query>
    )
  }
}

Countries.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    flagCode: PropTypes.string.isRequired,
  })),
  navigation: PropTypes.shape().isRequired,
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
