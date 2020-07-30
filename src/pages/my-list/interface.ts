import {FilmInterface} from "@common/types";


interface IMyListProps {
  authorizationStatus: string;
  avatar: string;
  films: FilmInterface[];
}

export {
  IMyListProps,
};
