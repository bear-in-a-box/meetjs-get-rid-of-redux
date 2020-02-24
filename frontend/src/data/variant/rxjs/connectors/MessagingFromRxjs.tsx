import React from 'react';
import { useObservable } from './useObservable.hook';
import { Message } from 'data/shared/model/message.model';
import MessagingService from '../implementation/messaging.service';

interface Props {
  component: React.ComponentType<{ lastMessage: Message | null | undefined }>;
}

export const MessagingFromRxjs: React.FC<Props> = ({
  component: Component
}) => {
  const message = useObservable<Message>(
    MessagingService.messages$,
    'messaging'
  );

  return <Component lastMessage={message} />;
};
