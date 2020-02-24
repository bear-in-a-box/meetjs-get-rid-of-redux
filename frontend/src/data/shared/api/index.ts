export const API_BASE = process.env.REACT_APP_API_BASE!;

export const ROUTES = {
  profiles: {
    _base: API_BASE + '/profiles',
    getById: (id: string) => `${ROUTES.profiles._base}/get-by-id/${id}`
  },
  messages: {
    _socketBase: '/messages',
    _base: API_BASE + '/messages',
    socket: () => ROUTES.messages._socketBase + '/ws',
    changeInterval: (interval: number) =>
      `${ROUTES.messages._base}/change-interval/${interval}`
  },
  user: {
    _base: API_BASE + '/user',
    profile: () => ROUTES.user._base + '/profile'
  }
};
