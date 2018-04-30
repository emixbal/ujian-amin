import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import nav from './nav'
import contactsReducer from '../Contacts/reducers';
import testiReducer from '../Testi/reducers';

const rootReducers = combineReducers({
  nav: nav,
  contactsReducer,
  testiReducer,
  form: formReducer
})

export default rootReducers