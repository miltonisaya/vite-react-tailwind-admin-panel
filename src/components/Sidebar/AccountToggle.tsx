import * as React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AccountToggle: React.FC = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-b-stone-300">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/13/13/45/boy-1590771_1280.jpg"
          alt="avatar"
          className="size-8 rounded shrink-0 bg-violet-500 shadow"
        />
        <div className="text-start">
          <span className="text-sm font-bold block"> Tom Is Loading</span>
          <span className="text-xs block text-stone-500">tom@hover.dev</span>
        </div>
        <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs" />
        <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs" />
      </button>
    </div>
  );
};

export default AccountToggle;
