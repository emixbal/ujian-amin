import { StackNavigator } from 'react-navigation';

import ContactsList from '../Contacts/screens/ContactsList';
import TestiList from '../Testi/screens/TestiList';
import AddTesti from '../Testi/screens/AddTesti';
import notificationsList from '../Notifications/screen/notificationsList'
import notificationsDetail from '../Notifications/screen/notificationDetail'

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
  },
  AddTesti:{
    screen: AddTesti,
    navigationOptions:{
      title: 'Add Testi'
    }
  },
  notificationsList:{
    screen: notificationsList,
    navigationOptions:{
      title: 'Notification List'
    }
  },
  notificationsDetail:{
    screen: notificationsDetail,
    navigationOptions:{
      title: 'Notification Detail'
    }
  }
})

export default RootNavigator;