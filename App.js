import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

import People from "./src/pages/People";
import PeopleDetail from "./src/pages/PeopleDetail";
import { capitalizaFirstLetter } from "./src/util";


const StackNavigator = createStackNavigator({
  'Main': {
    screen: People
  },
  'PeopleDetail': {
    screen: PeopleDetail,
    navigationOptions: ({navigation}) => {
      const peopleName = capitalizaFirstLetter(navigation.state.params.people.name.first);
      return ({
        title: peopleName,
        headerTitleStyle: {
          fontSize: 30,
          color: '#fff',
        }
      });
    }
  }
}, {
  defaultNavigationOptions: {
    title: 'Pessoas',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#6ca2f7',
    },
    headerTitleStyle: {
      fontSize: 30,
      color: '#fff',
      alignSelf: 'center'
    }
  }
})

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;

