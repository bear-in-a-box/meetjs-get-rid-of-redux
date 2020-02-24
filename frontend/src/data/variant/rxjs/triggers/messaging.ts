import MessagingService from 'data/variant/rxjs/implementation/messaging.service';
import { MessageTrigger } from 'data/shared/triggers';

import { areRxjsTriggersActive } from './index';

export const rxjsMessagingTrigger: MessageTrigger = cdm => {
  areRxjsTriggersActive() && MessagingService.onMessageReceived(cdm);
};
