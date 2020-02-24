import React from 'react';
import { useSelector } from 'react-redux';
import { Profile } from 'data/shared/model/profile.model';
import { StoreState } from 'data/variant/redux/implementation/store';

interface Props {
  component: React.ComponentType<{ user: Profile | null }>;
}

export const UserFromRedux: React.FC<Props> = ({ component: Component }) => {
  const user = useSelector<StoreState, Profile | null>(state => {
    console.log('Redux state connector in User');
    return state.user;
  });

  return <Component user={user} />;
};
