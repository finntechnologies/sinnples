import React from "react";

type ContentProps = {
  children: React.ReactNode;
};
const Content = ({ children }: ContentProps) => {
  return (
    <div className="bg-gray-800">{children}</div>
  );
};

export default Content;
