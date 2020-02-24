import React from 'react';
import { Profile } from 'data/shared/model/profile.model';
import './User.scss';

interface Props {
  user: Profile | null | undefined;
}

export const User: React.FC<Props> = ({ user }) => (
  <span className="UserBadge">
    {user != null ? (
      <>
        <span className="Name">{user.displayName}</span>
        <img src={user.avatar} alt="" className="Avatar" />
      </>
    ) : (
      <span className="NotLoggedIn">Anonymous</span>
    )}
  </span>
);
