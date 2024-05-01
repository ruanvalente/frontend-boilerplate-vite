import { AboutPage } from '@/pages/about';
import { ContactPage } from '@/pages/contact';
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
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
