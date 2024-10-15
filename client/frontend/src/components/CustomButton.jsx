import React from "react";

function CustomButton({ title, onClick }) {
  return (
    <button
      className="bg-green-700 border border-transparent hover:bg-white text-white hover:text-black hover:border-green hover:border-2 font-bold py-2 px-4 rounded-[26px] focus:outline-none focus:shadow-outline self-start"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
