import React from 'react';
import { Provider } from 'react-redux';
import { UserFromRedux } from 'data/variant/redux/connectors/UserFromRedux';
import { MessagingFromRedux } from 'data/variant/redux/connectors/MessagingFromRedux';
import { store } from 'data/variant/redux/implementation';
import { Messaging } from './Messaging';
import { User } from './User';

export const Redux: React.FC = () => (
  <Provider store={store}>
    <UserFromRedux component={User} />
    <MessagingFromRedux component={Messaging} />
  </Provider>
);
