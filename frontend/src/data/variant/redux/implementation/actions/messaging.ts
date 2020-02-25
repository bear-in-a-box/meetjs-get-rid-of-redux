import { Message, MessageCDM } from 'data/shared/model/message.model';
import { Dispatch } from 'redux';
import { getProfileById } from '../helpers/profiles-cache';

export const ACTION_TYPES = {
  appendMessage: 'MESSAGE_APPEND',
  receiveMessage: 'MESSAGE_RECEIVE'
} as const;

export function receiveMessage(message: MessageCDM) {
  return async function receivedMessageConverter(
    dispatch: Dispatch
  ): Promise<void> {
    const author = await getProfileById(message.authorId);
    const targetMessage: Message = {
      author,
      date: new Date(message.date),
      text: message.text,
      id: message.id
    };
    dispatch({ type: ACTION_TYPES.appendMessage, payload: targetMessage });
  };
}
