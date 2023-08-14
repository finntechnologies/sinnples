import React from "react";
import Header from "./Header";
import Content from "./Content";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen w-screen bg-gray-800">
      <Header />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
