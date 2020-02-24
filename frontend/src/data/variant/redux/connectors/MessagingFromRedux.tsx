import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from 'data/variant/redux/implementation/store';
import { Message } from 'data/shared/model/message.model';

interface Props {
  component: React.ComponentType<{ lastMessage: Message | null }>;
}

export const MessagingFromRedux: React.FC<Props> = ({
  component: Component
}) => {
  const message = useSelector<StoreState, Message | null>(state => {
    console.log('Redux state connector in Messaging');
    return state.messaging;
  });

  return <Component lastMessage={message} />;
};
