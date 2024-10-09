import { TextType } from "./Text.type";

export const Text = ({ children }: TextType) => {
  return <div className="font-bold text-underline">{children}</div>;
};
