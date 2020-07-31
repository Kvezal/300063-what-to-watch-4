export interface ITabsProps {
  list: string[];
  activeTab: string;
  onActiveTabChange: (tabId: string) => void;
}
