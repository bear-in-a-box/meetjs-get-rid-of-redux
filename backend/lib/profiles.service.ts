import { v4 as uuidv4 } from 'uuid';

import { Profile } from 'profile.model';

export class ProfilesService {
  private readonly NAMES: string[] = [
    'Andrzej',
    'Ania',
    'Stefan',
    'Magda',
    'Maniek'
  ];

  private readonly PROFILES: Profile[] = this.NAMES.map(
    name =>
      <Profile>{
        avatar: `https://api.adorable.io/avatars/128/meetjs2020-${name}.png`,
        displayName: name,
        id: uuidv4()
      }
  );

  private readonly PROFILES_BY_ID: Record<string, Profile> = Object.fromEntries(
    this.PROFILES.map(profile => [profile.id, profile])
  );

  getRandomProfile() {
    return this.PROFILES[Math.floor(Math.random() * this.PROFILES.length)];
  }

  getById(id: string) {
    return this.PROFILES_BY_ID[id];
  }
}

export default new ProfilesService();
