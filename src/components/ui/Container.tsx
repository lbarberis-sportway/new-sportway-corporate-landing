import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  pad = true,
}: {
  children: React.ReactNode;
  className?: string;
  pad?: boolean;
}) {
  return (
    <div
      className={cn(
        "w-full max-w-[1440px] mx-auto",
        pad && "px-5 md:px-14",
        className,
      )}
    >
      {children}
    </div>
  );
}
