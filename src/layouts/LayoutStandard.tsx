import { Outlet } from 'react-router-dom';

import Top from '@/layouts/shared/Top';
import Footer from '@/layouts/shared/Footer';

const LayoutStandard = () => {
  return (
    <div>
      <Top />
      <hr/>
      <h1>I am LayoutStandard</h1>
      <div>
        <Outlet />
      </div>
      <hr />
      <Footer />
      <hr/>
    </div>
  );
}

export default LayoutStandard;

