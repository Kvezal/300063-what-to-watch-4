export interface ITabsProps {
  tabs: string[];
  activeTab: string;
  onActiveTabChange: (tabId: string) => void;
}
