import { createAppContainer, createStackNavigator} from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetail from './src/pages/PeopleDetailsPage';

import capitalizeFirstLetter from './src/util/capitalizeFirstLetter'

if (__DEV__) {
  require('react-devtools');
}

const StackNavigator = createStackNavigator({

    'Main': {
      screen: PeoplePage
    },

    'PeopleDetail' : {
      screen: PeopleDetail,
      navigationOptions : ({ navigation }) => {
        const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);

        return ({
          title: peopleName,
          headerTitleStyle: {
            color: 'white',
            fontSize: 30        
          }      
        });

      }
    } 

  },
  {
    defaultNavigationOptions: {
      title: 'Pessoas',  
      headerTintColor: 'white',    
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5'

      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,        
        alignSelf: 'center'
      }      
    }    
  }
); 

const AppContainer =  createAppContainer(StackNavigator);


 export default AppContainer;