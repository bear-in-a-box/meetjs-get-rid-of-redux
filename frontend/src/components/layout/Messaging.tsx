import React, { useState, useEffect } from 'react';
import { Message as MessageModel } from 'data/shared/model/message.model';
import { Message as MessageView } from './messaging/Message';

import './Messaging.scss';

interface Props {
  lastMessage: MessageModel | null | undefined;
}

export const Messaging: React.FC<Props> = ({ lastMessage }) => {
  const [messages, setMessages] = useState<MessageModel[]>([]);

  useEffect(() => {
    if (lastMessage != null) {
      setMessages([lastMessage, ...messages.slice(0, 49)]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMessage]);

  return (
    <div className="Messaging">
      {messages.map(message => (
        <MessageView key={message.id} message={message} />
      ))}
    </div>
  );
};
