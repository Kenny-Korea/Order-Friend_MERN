import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return <div className="Content">{children}</div>;
};

export default Content;
