import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Content from "./content";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="Layout">
      <Navbar />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
