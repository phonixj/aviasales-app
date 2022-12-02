import { combineReducers } from 'redux';

import filterReducer from './filterReducer';
import checkboxReducer from './checkboxReducer';
import ticketReducer from './ticketReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  filterReducer,
  checkboxReducer,
  ticketReducer,
  appReducer,
});

export default rootReducer;
