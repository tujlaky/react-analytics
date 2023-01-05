import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

function DefaultLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex h-full flex-1">
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout;