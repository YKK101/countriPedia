import React, { PureComponent } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { Provider as PaperProvider } from 'react-native-paper'
import { Countries } from '@screens'
import countryGQL from '@api/countryGQL'
import theme from '@constants/theme'

class App extends PureComponent {
  render() {
    return (
      <ApolloProvider client={countryGQL}>
        <PaperProvider theme={theme.lilac}>
          <ThemeProvider theme={theme.lilac.colors}>
            <Countries />
          </ThemeProvider>
        </PaperProvider>
      </ApolloProvider>
    )
  }
}

export default App
