import React from 'react';
import { Message as Model } from 'data/shared/model/message.model';
import './Message.scss';

interface Props {
  message: Model;
}

export const Message: React.FC<Props> = ({ message }) => (
  <div className="Message">
    <img src={message.author.avatar} alt="" className="Avatar" />
    <span className="Contents">
      <span className="Heading">
        <span className="DisplayName">{message.author.displayName}</span>,{' '}
        <span className="Date">{message.date.toLocaleString()}</span>
      </span>
      <span className="Text">{message.text}</span>
    </span>
  </div>
);
