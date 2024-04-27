import { ReactNode } from 'react';

type ContentLayout = {
  children: ReactNode;
};

export function ContentLayout({ children }: ContentLayout) {
  return <div className="mt-20 flex w-full flex-col px-4">{children}</div>;
}
