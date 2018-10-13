import React, { PureComponent } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { Countries } from '@screens'
import countryGQL from '@api/countryGQL'
import theme from '@constants/theme'

class App extends PureComponent {
  render() {
    return (
      <ApolloProvider client={countryGQL}>
        <ThemeProvider theme={theme.lilac}>
          <Countries />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default App
