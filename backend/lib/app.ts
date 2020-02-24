import http from 'http';
import express from 'express';
import socketio from 'socket.io';
import cors from 'cors';

import UserService from './user.service';
import ProfilesService from './profiles.service';
import MessagingService from './messaging.service';
import { Message } from 'message.model';

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketio(server, { path: '/messages/ws', origins: '*:*' });

app.get('/user/profile', (_, res) => res.json(UserService.getUser()));
app.get('/profiles/get-by-id/:id', (req, res) => {
  const profile = ProfilesService.getById(req.params.id);
  if (profile == null) {
    return res.sendStatus(404);
  }
  return res.json(profile);
});
app.get('/messages/change-interval/:interval', (req, res) => {
  MessagingService.changeInterval(+req.params.interval);
  res.sendStatus(200);
});

io.on('connection', socket => {
  const listener = (message: Message) => socket.send(message);
  MessagingService.connect(listener);
  socket.on('disconnect', () => MessagingService.disconnect(listener));
});

server.listen(8081, () => console.log(`Workin' really hard`));
