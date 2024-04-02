export interface ButtonTypes {
  text: string;
  onClick: () => void;
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
}
