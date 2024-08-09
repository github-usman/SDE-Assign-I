import React from "react";

interface ILayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <h1>Footer</h1>
    </>
  );
};

export default Layout;
