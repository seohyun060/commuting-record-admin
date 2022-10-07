export type SetStateBoolean = React.Dispatch<React.SetStateAction<boolean>>;
export type SetStateNumber = React.Dispatch<React.SetStateAction<number>>;
export type SetStateString = React.Dispatch<React.SetStateAction<string>>;
export type EChange = React.ChangeEvent<HTMLInputElement>;

export type EFunction = (e: EChange) => void;

export type VoidFunction = () => void;
