import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen scroll-smooth text-gray-800">{children}</div>
  );
};

export default MainLayout;
