import {ServerUserInterface, UserInterface} from "@common/types";


const adaptUser = (user: ServerUserInterface): UserInterface => ({
  id: user.id,
  avatar: `https://4.react.pages.academy${user.avatar_url}`,
  email: user.email,
  name: user.name,
});

export default adaptUser;
