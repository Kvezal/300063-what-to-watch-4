import {IFilm} from "@common/types";


export interface IMyListProps {
  authorizationStatus: string;
  avatar: string;
  films: IFilm[];
}
