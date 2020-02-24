import { v4 as uuidv4 } from 'uuid';

import { Profile } from 'profile.model';

const user: Profile = {
  id: uuidv4(),
  avatar: 'https://api.adorable.io/avatars/128/meetjs2020.png',
  displayName: 'TestGuy'
};

export class UserService {
  getUser() {
    return user;
  }
}

export default new UserService();
