import { combineReducers } from 'redux';

import auth from './auth/reducer';
import deliveryman from './deliveryman/reducer';

const reducers = combineReducers({
  auth,
  deliveryman,
});

export default reducers;
