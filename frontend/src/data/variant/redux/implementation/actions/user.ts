import { Profile } from 'data/shared/model/profile.model';

export const ACTION_TYPES = {
  updateUser: 'USER_UPDATE'
} as const;

export function updateUser(profile: Profile | null) {
  return { type: ACTION_TYPES.updateUser, payload: profile };
}
