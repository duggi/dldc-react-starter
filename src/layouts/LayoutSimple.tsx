import { Outlet } from 'react-router-dom';
import Top from '@/layouts/shared/Top';


const LayoutSimple = () => {
  return (
    <div>
      <Top />
      <hr/>
      <h1>I am LayoutSimple</h1>
      <div>
        <Outlet />
      </div>
      <hr />
    </div>
  );
}

export default LayoutSimple;
