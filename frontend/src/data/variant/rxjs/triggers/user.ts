import UserService from 'data/variant/rxjs/implementation/user.service';
import { UserTrigger } from 'data/shared/triggers';

import { areRxjsTriggersActive } from './index';

export const rxjsUserTrigger: UserTrigger = user => {
  areRxjsTriggersActive() && UserService.onUserChanged(user);
};
