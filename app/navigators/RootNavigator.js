import { StackNavigator } from 'react-navigation';

import ContactsList from '../Contacts/screens/ContactsList';
import TestiList from '../Testi/screens/TestiList'

const RootNavigator = StackNavigator({
  ContactsList:{
    screen: ContactsList,
    navigationOptions:{
      title: 'Contacts List'
    }
  },
  TestiList:{
    screen: TestiList,
    navigationOptions:{
      title: 'Testi List'
    }
  }
})

export default RootNavigator;