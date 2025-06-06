import { LucideMessageSquareWarning } from "lucide-react";
import React, { cloneElement, JSX } from "react";

type PlaceholderProps = {
  label: string;
  icon?: JSX.Element;
  button?: JSX.Element;
};

const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center">
      {cloneElement(icon, {
        className: "w-16 h-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
};

export { Placeholder };
