import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className="homepage"></div>
      <AppBar />
      <Outlet />
    </>
  );
};

export default Layout;
