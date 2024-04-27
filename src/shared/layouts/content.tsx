import { ReactNode } from "react";

type ContentLayout = {
  children: ReactNode;
};

export function ContentLayout({ children }: ContentLayout) {
  return <div className="w-full px-4 flex mt-20 flex-col">{children}</div>;
}
