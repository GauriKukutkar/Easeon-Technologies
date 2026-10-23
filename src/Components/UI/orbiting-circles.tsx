import React from "react";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className = "",
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
}: OrbitingCirclesProps) {
  const animationDuration = duration / speed;

  return (
    <>
      {path && (
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border border-blue-100"
          style={{
            width: radius * 2,
            height: radius * 2,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      <div
        className={`absolute left-1/2 top-1/2 ${className}`}
        style={{
          width: iconSize,
          height: iconSize,
          transform: "translate(-50%, -50%)",
          animation: `orbit ${animationDuration}s linear infinite ${
            reverse ? "reverse" : "normal"
          }`,
          animationDelay: `${delay}s`,
        }}
      >
        <div
          className="flex items-center justify-center gap-6"
          style={{
            transform: `translateX(${radius}px)`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-full border border-blue-100 bg-white p-3 shadow-sm"
              style={{
                width: iconSize,
                height: iconSize,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}