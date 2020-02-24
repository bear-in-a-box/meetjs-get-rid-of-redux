import { Profile } from 'data/shared/model/profile.model';
import { Observable, from } from 'rxjs';
import { ROUTES } from 'data/shared/api';
import { shareReplay } from 'rxjs/operators';

export class ProfilesService {
  private profilesMap = new Map<string, Observable<Profile>>();

  public getProfileById$(id: string): Observable<Profile> {
    if (this.profilesMap.has(id)) {
      return this.profilesMap.get(id)!;
    }
    const action = from(
      fetch(ROUTES.profiles.getById(id)).then(r => r.json())
    ).pipe(shareReplay(1));
    this.profilesMap.set(id, action);
    return action;
  }
}

export default new ProfilesService();
