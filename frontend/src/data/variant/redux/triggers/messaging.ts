import { store } from 'data/variant/redux/implementation/store';
import { MessageTrigger } from 'data/shared/triggers';
import { receiveMessage } from 'data/variant/redux/implementation/actions/messaging';

import { areReduxTriggersActive } from './index';

export const reduxMessagingTrigger: MessageTrigger = cdm => {
  areReduxTriggersActive() && store.dispatch(receiveMessage(cdm) as any);
};
