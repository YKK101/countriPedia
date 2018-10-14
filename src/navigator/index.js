import { createStackNavigator } from 'react-navigation'
import {
  Countries,
  Detail,
} from '@screens'
import theme from '@constants/theme'

const MainNavigator = createStackNavigator(
  {
    countries: Countries,
    detail: Detail,
  }, {
    initialRouteName: 'countries',
    navigationOptions: {
      headerStyle: {
        backgroundColor: theme.lilac.colors.primary,
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      headerBackTitle: null,
    },
  },
)

export default MainNavigator
