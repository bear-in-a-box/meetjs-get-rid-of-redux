import React from 'react';
import { UserFromRxjs } from 'data/variant/rxjs/connectors/UserFromRxjs';
import { MessagingFromRxjs } from 'data/variant/rxjs/connectors/MessagingFromRxjs';
import { User } from './User';
import { Messaging } from './Messaging';

export const RxJS: React.FC = () => (
  <>
    <UserFromRxjs component={User} />
    <MessagingFromRxjs component={Messaging} />
  </>
);
