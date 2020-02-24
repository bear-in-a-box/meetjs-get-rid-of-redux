import { store } from 'data/variant/redux/implementation/store';
import { ROUTES } from 'data/shared/api';
import { Profile } from 'data/shared/model/profile.model';
import { cacheProfile } from '../actions/profiles';

export async function getProfileById(id: string) {
  const { profiles } = store.getState();
  if (profiles[id] != null) {
    return profiles[id];
  }
  const profile: Profile = await fetch(ROUTES.profiles.getById(id)).then(r =>
    r.json()
  );
  store.dispatch(cacheProfile(profile));
  return profile;
}
