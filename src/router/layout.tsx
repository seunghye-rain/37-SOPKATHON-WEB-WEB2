import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import AppBar from '@/shared/components/app-bar/app-bar';
import Loading from '@/shared/components/loading/Loading';
import { rootStyle } from '@/shared/styles/global.css';

const ONBOARDING_PATHS = ['/'];

const Layout = () => {
  const location = useLocation();
  const isOnboarding = ONBOARDING_PATHS.includes(location.pathname);

  return (
    <div className={rootStyle}>
      <AppBar variant={isOnboarding ? 'onboarding' : 'default'} />
      <Suspense fallback={<Loading />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
