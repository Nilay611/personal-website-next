import React from "react";

const MagicButton = ({
  text,
  icon,
  position,
  handleClick,
  otherClasses,
  animate,
}: {
  text?: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  animate?: boolean;
}) => {
  return (
    <button
      className={`font-jetbrainsMono inline-flex gap-3 h-12 items-center justify-center rounded-md border bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-medium
      hover:translate-x-[-3px] hover:translate-y-[3px] transition-all ${otherClasses} ${
        animate ? "animate-shimmer" : ""
      }`}
      onClick={handleClick}
    >
      {position === "left" && icon}
      {text}
      {position === "right" && icon}
    </button>
  );
};

export default MagicButton;
