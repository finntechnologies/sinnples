import React from "react";

type ContentProps = {
  children: React.ReactNode;
};
const Content = ({ children }: ContentProps) => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
};

export default Content;
