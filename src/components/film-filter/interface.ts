export interface IFilmFilterProps {
  tabs: string[];
  onItemClick: (itemId: string) => void;
  activeItem: string;
}
