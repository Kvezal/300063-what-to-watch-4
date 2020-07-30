export interface IRatingProps {
  starCount: number;
  value: string;
  onChange: (value: string | number) => void;
  required: boolean;
  name: string;
}
