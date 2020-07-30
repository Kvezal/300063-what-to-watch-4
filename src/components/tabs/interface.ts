interface ITab {
  name: string;
  id: string;
}

interface ITabsProps {
  list: ITab[];
  activeTab: string;
  onActiveTabChange: (tabId: string) => void;
}

export {
  ITab,
  ITabsProps,
};
