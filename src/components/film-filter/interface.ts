import {ITab} from "@components/tabs/interface";


export interface IFilmFilterProps {
  list: ITab[];
  onItemClick: (itemId: string) => void;
  activeItem: string;
}
