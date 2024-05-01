import { ReactNode } from 'react';

type ContentLayout = {
  children: ReactNode;
};

export function ContentLayout({ children }: ContentLayout) {
  return (
    <div className="mt-[56px] flex w-full flex-col bg-gray-100 px-4 md:ml-[-60px]">
      {children}
    </div>
  );
}
