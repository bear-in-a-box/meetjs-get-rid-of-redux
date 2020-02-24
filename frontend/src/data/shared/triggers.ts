import { MessageCDM } from './model/message.model';
import { Profile } from './model/profile.model';

export type MessageTrigger = (cdm: MessageCDM) => void | Promise<void>;
export type UserTrigger = (user: Profile) => void | Promise<void>;
