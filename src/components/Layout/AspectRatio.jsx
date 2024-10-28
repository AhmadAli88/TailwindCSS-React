import React from "react";

const AspectRatio = () => {
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/O6xB-fWuIaE?si=7yrjqegCv8bL9CWP"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default AspectRatio;
