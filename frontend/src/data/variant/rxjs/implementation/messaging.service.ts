import { Observable, Subject, forkJoin, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Message, MessageCDM } from 'data/shared/model/message.model';
import { Profile } from 'data/shared/model/profile.model';
import ProfilesService from './profiles.service';

export class MessagingService {
  private incomingMessages$ = new Subject<MessageCDM>();
  private dataSource$ = this.createOutgoingMessagesSource$();

  get messages$(): Observable<Message> {
    return this.dataSource$;
  }

  private createOutgoingMessagesSource$(): Observable<Message> {
    return this.incomingMessages$.pipe(
      mergeMap(cdm =>
        forkJoin([of(cdm), ProfilesService.getProfileById$(cdm.authorId)] as [
          Observable<MessageCDM>,
          Observable<Profile>
        ])
      ),
      map<[MessageCDM, Profile], Message>(([cdm, profile]) => ({
        author: profile,
        date: new Date(cdm.date),
        text: cdm.text,
        id: cdm.id
      }))
    );
  }

  onMessageReceived(message: MessageCDM): void {
    this.incomingMessages$.next(message);
  }
}

export default new MessagingService();
