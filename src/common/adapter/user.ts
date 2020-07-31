import {IServerUser, IUser} from "@common/types";


const adaptUser = (user: IServerUser): IUser => ({
  id: user.id,
  avatar: `https://4.react.pages.academy${user.avatar_url}`,
  email: user.email,
  name: user.name,
});

export default adaptUser;
