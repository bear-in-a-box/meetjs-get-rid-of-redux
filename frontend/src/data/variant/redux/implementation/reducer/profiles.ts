import { Reducer } from 'redux';
import { Profile } from 'data/shared/model/profile.model';
import { ACTION_TYPES } from 'data/variant/redux/implementation/actions/profiles';

type State = Record<string, Profile>;

const initialState: State = {};

export const profilesReducer: Reducer<State> = (
  state = initialState,
  action
) => {
  console.log('Redux: Profiles reducer', action.type);
  switch (action.type) {
    case ACTION_TYPES.cacheProfile:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
