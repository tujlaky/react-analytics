import React from "react";

function FormControl({ children }: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
  return <div className="flex flex-col w-full space-y-2">
    {children}
  </div>
}

export default FormControl;