import { HistoryList, TabBlock, TabHistory } from '@/pages/home/components/tab';
import { HomePage } from '@/pages/home/home';
import { Layouts } from '@/shared/layouts';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

const LayoutRouterWrapper = () => {
  return (
    <Layouts>
      <Outlet />
    </Layouts>
  );
};

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutRouterWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="block" element={<TabBlock />} />
          <Route path="history" element={<TabHistory />} />
          <Route path="history/*" element={<HistoryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
