"use client";
import { useProgressContext } from "@/app/contexts/ProgressProvider";

export default function ProgressButton({ children, method, disabled }) {
  const { calcProgress, progress } = useProgressContext();

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => calcProgress(method)}
      className="disabled:opacity-10 "
    >
      {children}
    </button>
  );
}
