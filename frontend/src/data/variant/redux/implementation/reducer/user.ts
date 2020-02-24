import { Reducer } from 'redux';
import { Profile } from 'data/shared/model/profile.model';
import { ACTION_TYPES } from 'data/variant/redux/implementation/actions/user';

type State = Profile | null;

const initialState: State = null;

export const userReducer: Reducer<State> = (state = initialState, action) => {
  console.log('Redux: User reducer', action.type);
  switch (action.type) {
    case ACTION_TYPES.updateUser:
      return action.payload;
    default:
      return state;
  }
};
