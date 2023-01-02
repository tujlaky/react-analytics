import React from "react";

function Label({children, ...props}: React.PropsWithChildren<React.HTMLProps<HTMLLabelElement>>) {
  return <label className="text-base font-semibold text-gray-800 dark:text-white" {...props}>{children}</label>
}

export default Label;