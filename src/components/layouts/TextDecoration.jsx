import React from "react";

const TextDecoration = ({ text }) => {
  return (
    <div className="relative inline-block cursor-pointer">
      <span
        className="text-2xl tracking-wider uppercase relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full 
  after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
      >
        {text}
      </span>
    </div>
  );
};

export default TextDecoration;
