export interface IWithActiveTabHOCInjectProps {
  activeTab: string;
  baseURI: string;
  onActiveTabChange: (tab: string) => void;
}
