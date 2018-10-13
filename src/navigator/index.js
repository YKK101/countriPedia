import { createStackNavigator } from 'react-navigation'
import { Countries } from '@screens'
import theme from '@constants/theme'

const MainNavigator = createStackNavigator(
  {
    countries: Countries,
  }, {
    initialRouteName: 'countries',
    navigationOptions: {
      headerStyle: {
        backgroundColor: theme.lilac.colors.primary,
      },
      headerTitleStyle: {
        color: 'white',
      },
    },
  },
)

export default MainNavigator
