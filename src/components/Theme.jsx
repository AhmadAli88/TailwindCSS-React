import React from "react";

const Theme = () => {
  return (
    <div className="container mx-auto px-4 p-custom-padding">
      <h1 className="text-blue font-sans">Welcome to My Theme</h1>
      <p className="text-gray-dark">
        This is a paragraph styled with Tailwind CSS colors and custom padding.
      </p>
      <div className="bg-purple text-white p-custom-padding rounded">
        This is a box with a purple background and white text.
      </div>
      <button className="mt-4 bg-green text-white px-4 py-2 rounded">
        Click Me
      </button>
    </div>
  );
};

export default Theme;
