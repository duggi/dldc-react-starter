import { Outlet } from 'react-router-dom';
import Top from '@/layouts/shared/Top';

const LayoutSimple = () => {
  return (
    <div>
      <Top />
      <div className="main-content bg-blue-50 p-4">
        <h1>I am LayoutSimple</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutSimple;
