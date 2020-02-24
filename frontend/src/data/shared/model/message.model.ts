import { Profile } from './profile.model';

export interface MessageCDM {
  authorId: string;
  text: string;
  date: number;
}

export type Message = Omit<MessageCDM, 'authorId' | 'date'> & {
  author: Profile;
  date: Date;
  id: string;
};
