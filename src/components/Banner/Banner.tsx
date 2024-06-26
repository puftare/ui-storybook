import React from "react";

export interface BannerProps {
  text: string;
  children?: React.ReactNode;
  color?: string;
}

export const Banner: React.FC<BannerProps> = ({ text, color }) => {
  return (
    <div
      className={`flex items-center justify-center gap-x-6 ${color} px-6 py-2.5 sm:px-3.5`}
    >
      <p className="text-sm leading-6 text-white">
        <a href="/">
          <strong className="font-semibold">DEVersity 2024</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          {text}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      
    </div>
  );
};
