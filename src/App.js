import React, { PureComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import { Main } from '@screens'
import theme from '@constants/theme'

class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme.lilac}>
        <Main />
      </ThemeProvider>
    )
  }
}

export default App
