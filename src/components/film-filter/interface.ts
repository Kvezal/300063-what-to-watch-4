export interface IFilmFilterProps {
  list: string[];
  onItemClick: (itemId: string) => void;
  activeItem: string;
}
