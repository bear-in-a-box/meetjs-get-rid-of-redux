import { Profile } from 'data/shared/model/profile.model';

export const ACTION_TYPES = {
  cacheProfile: 'PROFILE_CACHE'
} as const;

export function cacheProfile(profile: Profile) {
  return { type: ACTION_TYPES.cacheProfile, payload: profile };
}
