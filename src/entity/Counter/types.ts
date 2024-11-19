export type CounterProps = {
  name: string;
  count: number;
  setCount: (count: number) => void;
  minCount: number;
  maxCount: number;
  isDisabled: boolean;
};
