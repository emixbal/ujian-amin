import { StackNavigator } from 'react-navigation';

import ContactsList from '../Contacts/screens/ContactsList';
import TestiList from '../Testi/screens/TestiList';
import AddTesti from '../Testi/screens/AddTesti';
import notificationsList from '../Notifications/screen/notificationsList'
import notificationsDetail from '../Notifications/screen/notificationDetail'
import ProfileList from '../Profile/screen/ProfileList'
import ProfileListNoRedux from '../Profile/screen/ProfileListNoRedux'
import ListProfile from '../Profile/screen/ListProfile'
import IndexProfile from '../Profile/screen/index'

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
      title: 'Notification Detail',
    }
  },
  ProfileList:{
    screen: ProfileList,
    navigationOptions:{
      title: null,
      headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }
    }
  },
  IndexProfile:{
    screen: IndexProfile,
    navigationOptions:{
      title: 'Index Profile'
    }
  },
  ProfileListNoRedux:{
     screen: ProfileListNoRedux,
      navigationOptions:{
        title: null,
        headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }
      }
  },
  ListProfile:{
     screen: ListProfile,
      navigationOptions:{
        title: 'List Profile'
      }
  }
})

export default RootNavigator;