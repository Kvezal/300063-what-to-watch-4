export interface ITab {
  name: string;
  id: string;
}

export interface ITabsProps {
  list: ITab[];
  activeTab: string;
  onActiveTabChange: (tabId: string) => void;
}
