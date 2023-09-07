"use client";

import {
  ProgressContextProvider,
  useProgressContext,
} from "@/app/contexts/ProgressProvider";

export default function ProgressBar() {
  const { progress } = useProgressContext();

  return (
    <div className="relative">
      <span className="bg-darkWhite w-full py-[1px] block" />
      <span
        style={{ width: `${progress}%` }}
        className="bg-black py-[1px] absolute top-0 left-0"
      />
    </div>
  );
}
