import {EAuthorizationStatus} from "@store/user/interface";
import {IFilm} from "@common/types";


export interface IMyListMapStateToProps {
  authorizationStatus: EAuthorizationStatus;
  films: IFilm[];
  avatar: string;
}
