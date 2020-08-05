export interface IWithActiveFlagHOCState {
  isActive: boolean;
}

export interface IWithActiveFlagHOCInjectProps {
  isActive: boolean;
  onActiveChange: (tab: string) => void;
}
