import { Outlet } from 'react-router-dom';

import Top from '@/layouts/shared/Top';
import Bottom from '@/layouts/shared/Bottom';

const LayoutStandard = () => {
  return (
    <div>
      <Top />
      <div className="main-content bg-blue-50 p-4">
        <h1>I am LayoutStandard</h1>
        <Outlet />
      </div>
      <Bottom />
    </div>
  );
}

export default LayoutStandard;
