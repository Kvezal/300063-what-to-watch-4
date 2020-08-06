import {RESOURCE_URL} from "@common/consts";
import {IServerUser, IUser} from "@common/types";


const adaptUser = (user: IServerUser): IUser => ({
  id: user.id,
  avatar: `${RESOURCE_URL}${user.avatar_url}`,
  email: user.email,
  name: user.name,
});

export default adaptUser;
