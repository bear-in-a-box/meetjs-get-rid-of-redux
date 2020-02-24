import { store } from 'data/variant/redux/implementation/store';
import { UserTrigger } from 'data/shared/triggers';
import { updateUser } from 'data/variant/redux/implementation/actions/user';

import { areReduxTriggersActive } from './index';

export const reduxUserTrigger: UserTrigger = user => {
  areReduxTriggersActive() && store.dispatch(updateUser(user));
};
