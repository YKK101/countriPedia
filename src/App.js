import React, { PureComponent } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { Provider as PaperProvider } from 'react-native-paper'
import countryGQL from '@api/countryGQL'
import theme from '@constants/theme'
import MainNavigator from './navigator'

class App extends PureComponent {
  render() {
    return (
      <ApolloProvider client={countryGQL}>
        <PaperProvider theme={theme.lilac}>
          <ThemeProvider theme={theme.lilac.colors}>
            <MainNavigator />
          </ThemeProvider>
        </PaperProvider>
      </ApolloProvider>
    )
  }
}

export default App
