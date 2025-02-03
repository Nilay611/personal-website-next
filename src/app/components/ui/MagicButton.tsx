import React from "react";

const MagicButton = ({
  text,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  text: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`font-jetbrainsMono inline-flex gap-3 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-medium text-slate-400
      hover:translate-x-[-3px] hover:translate-y-[3px] transition-all ${otherClasses}`}
    >
      {icon && position === "left" && icon}
      {text}
      {icon && position === "right" && icon}
    </button>
  );
};

export default MagicButton;
