"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative group/container",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute transition-opacity inset-0 -z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl",
          animate && "animate-pulse",
          className
        )}
      />
      {children}
    </div>
  );
};

