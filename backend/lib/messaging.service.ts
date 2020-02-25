import { EventEmitter } from 'events';
import { v4 as uuidv4 } from 'uuid';
import { Message } from 'message.model';
import ProfilesService from './profiles.service';

export type MessageHandler = (message: Message) => void;

export const MESSAGE_EVENT = 'message';

const DEFAULT_INTERVAL: number = 2000;

export class MessagingService {
  private intervalHandle: NodeJS.Timeout | null = null;
  private messagesEmitter = new EventEmitter();

  private readonly MESSAGES: string[] = [
    'siemka',
    'witajcie',
    'cześć',
    'hejka',
    'uszanowanko'
  ];

  constructor() {
    this.runInterval();
  }

  private runInterval(interval: number = DEFAULT_INTERVAL): void {
    if (this.intervalHandle != null) {
      clearInterval(this.intervalHandle);
    }
    this.intervalHandle = setInterval(() => this.simulateMessage(), interval);
    console.log('Interval set to', interval);
  }

  private simulateMessage() {
    this.messagesEmitter.emit(MESSAGE_EVENT, this.createRandomMessage());
  }

  private createRandomMessage(): Message {
    const date = +new Date();
    const profile = ProfilesService.getRandomProfile();
    const text = this.MESSAGES[
      Math.floor(Math.random() * this.MESSAGES.length)
    ];
    const message: Message = {
      authorId: profile.id,
      date,
      text,
      id: `${profile.id}.${uuidv4()}`
    };
    process.env.DEBUG === '1' &&
      console.log('Message from', profile.displayName, message);
    return message;
  }

  connect(handler: MessageHandler) {
    this.messagesEmitter.on(MESSAGE_EVENT, handler);
  }

  disconnect(handler: MessageHandler) {
    this.messagesEmitter.off(MESSAGE_EVENT, handler);
  }

  changeInterval(interval: number) {
    this.runInterval(interval);
  }
}

export default new MessagingService();
