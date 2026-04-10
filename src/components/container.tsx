import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[104rem] px-6 sm:px-12 2xl:px-16">
      {children}
    </div>
  );
}

