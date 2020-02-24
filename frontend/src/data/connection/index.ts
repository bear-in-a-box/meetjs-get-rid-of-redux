import socketio from 'socket.io-client';
import { ROUTES, API_BASE } from 'data/shared/api';
import { MessageCDM } from 'data/shared/model/message.model';
import { reduxMessagingTrigger } from 'data/variant/redux/triggers/messaging';
import { rxjsMessagingTrigger } from 'data/variant/rxjs/triggers/messaging';
import { Profile } from 'data/shared/model/profile.model';
import { reduxUserTrigger } from 'data/variant/redux/triggers/user';
import { rxjsUserTrigger } from 'data/variant/rxjs/triggers/user';

const io = socketio.connect(API_BASE, {
  path: ROUTES.messages.socket(),
  reconnection: true
});
io.on('connect', () => {
  io.on('message', (message: MessageCDM) => {
    reduxMessagingTrigger(message);
    rxjsMessagingTrigger(message);
  });
});

fetch(ROUTES.user.profile())
  .then(r => r.json())
  .then((user: Profile) => {
    reduxUserTrigger(user);
    rxjsUserTrigger(user);
  });

export async function changeMessagesInterval(interval: number) {
  return await fetch(ROUTES.messages.changeInterval(interval));
}
