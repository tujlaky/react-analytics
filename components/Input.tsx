import React from "react";

const Input = React.forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>((props, ref) => {
  return <div className="relative">
    <input ref={ref} className="w-full py-2 px-2 placeholder-gray-400 border-2 text-base font-normal text-gray-700 rounded-lg focus:border-gray-600 focus:outline-none focus:ring-0 border-gray-100"  type="text" {...props} />
  </div>
});

export default Input;