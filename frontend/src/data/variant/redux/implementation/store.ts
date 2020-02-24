import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducer/user';
import { profilesReducer } from './reducer/profiles';
import { messagingReducer } from './reducer/messaging';

const reducer = combineReducers({
  user: userReducer,
  profiles: profilesReducer,
  messaging: messagingReducer
});

export const store = createStore(reducer, applyMiddleware(thunk));

export type StoreState = ReturnType<typeof reducer>;
