import { PropsWithChildren } from "react";

interface CardProps {
  title: string;
  className?: string;
}

export default function Card({
  title,
  className,
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <div
      id={`card-${title}`}
      className={`relative border-2 border-dashed border-white/25 ${className}`}
    >
      <h1 className="absolute left-2 -translate-y-1/2 bg-base-200 px-4 py-1 text-sm text-neutral-content">
        {title}
      </h1>

      <div className="p-6">{children}</div>
    </div>
  );
}
