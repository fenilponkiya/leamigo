import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const LayoutContainer = ({ children }) => {
  return (
    <div className="d-flex h-full justify-between">
      <Header />
      <div className="container px-8 sm:px-24 md:px-12 lg:px-28">
        {children}
      </div>
      <Footer />
    </div>
  );
};
