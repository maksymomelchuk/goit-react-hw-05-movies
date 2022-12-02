import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className="homepage"></div>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
