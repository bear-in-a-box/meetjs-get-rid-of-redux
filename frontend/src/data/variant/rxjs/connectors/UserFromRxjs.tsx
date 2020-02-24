import React from 'react';
import { useObservable } from './useObservable.hook';
import UserService from '../implementation/user.service';
import { Profile } from 'data/shared/model/profile.model';

interface Props {
  component: React.ComponentType<{ user: Profile | null | undefined }>;
}

export const UserFromRxjs: React.FC<Props> = ({ component: Component }) => {
  const user = useObservable<Profile>(UserService.profile$, 'user profile');

  return <Component user={user} />;
};
