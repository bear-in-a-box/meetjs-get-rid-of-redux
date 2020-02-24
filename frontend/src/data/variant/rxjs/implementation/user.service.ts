import { BehaviorSubject, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { Profile } from 'data/shared/model/profile.model';

export class UserService {
  private dataSource$ = new BehaviorSubject<Profile>(null as any);

  get profile$(): Observable<Profile> {
    return this.dataSource$.asObservable();
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.dataSource$.pipe(map(user => user != null));
  }

  get userName$(): Observable<string | undefined> {
    return this.dataSource$.pipe(pluck('displayName'));
  }

  onUserChanged(user: Profile) {
    this.dataSource$.next(user);
  }
}

export default new UserService();
