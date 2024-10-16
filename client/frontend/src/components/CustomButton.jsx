import React from "react";

function CustomButton({ title, onClick }) {
  return (
    <button
      className="bg-green border border-transparent hover:bg-white text-white hover:text-black hover:border-green-700 hover:border-[1px] font-bold py-2 px-4 rounded-[26px] focus:outline-none focus:shadow-outline self-start"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
