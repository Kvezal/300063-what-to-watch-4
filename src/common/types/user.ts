export interface IUser {
  id: number;
  avatar: string;
  email: string;
  name: string;
}

export interface IServerUser {
  id: number;
  email: string;
  name: string;
  avatar_url: string;
}
