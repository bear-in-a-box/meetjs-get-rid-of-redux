import { Reducer } from 'redux';
import { Message } from 'data/shared/model/message.model';
import { ACTION_TYPES } from 'data/variant/redux/implementation/actions/messaging';

type State = Message | null;

const initialState: State = null;

export const messagingReducer: Reducer<State> = (
  state = initialState,
  action
) => {
  console.log('Redux: Messaging reducer', action.type);
  switch (action.type) {
    case ACTION_TYPES.appendMessage:
      return action.payload;
    default:
      return state;
  }
};
