import React from "react";
import clsx from 'clsx';

function Sidebar({ children, className }: React.PropsWithChildren<{className?: string}>) {
  return <div className={clsx("px-4 py-4", className)}>
    <h1 className="text-gray-900 dark:text-white text-2xl font-bold">Sandbox</h1>
    <div className="my-2">
      {children}
    </div>
  </div>
}

export default Sidebar;