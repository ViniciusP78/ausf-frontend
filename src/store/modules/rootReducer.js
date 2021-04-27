import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth/reducer';
import confirmation from './confirmation/reducer';

const authConfig = {
  key: 'auth',
  storage,
  blacklist: ['error', 'loading'],
};

export default combineReducers({
  auth: persistReducer(authConfig, auth),
  confirmation,
});
