interface UserInterface {
  id: number;
  avatar: string;
  email: string;
  name: string;
}

interface ServerUserInterface {
  id: number;
  email: string;
  name: string;
  avatar_url: string;
}

export {UserInterface, ServerUserInterface};
