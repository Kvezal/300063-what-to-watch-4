import {ITab} from "@components/tabs/interface";


interface IFilmFilterProps {
  list: ITab[];
  onItemClick: (itemId: string) => void;
  activeItem: string;
}

export {
  IFilmFilterProps,
};
