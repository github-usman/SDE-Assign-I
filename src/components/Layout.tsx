import React from "react";
import Footer from "./home/Footer";

interface ILayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
