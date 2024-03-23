import { Outlet } from 'react-router-dom';
import Top from '@/layouts/shared/Top';
import Bottom from '@/layouts/shared/Bottom';
import Stub from '@/components/Stub';

const LayoutGrid = () => {
  return (
    <div className="grid-layout lg:mx-auto">
      <Top />
      <div className="left-rail bg-slate-50 p-4">
        <code>LEFT</code>
        <Stub />
        <Stub />
        <Stub />
      </div>
      <div className="content bg-blue-50 p-4">
        <h1>I am LayoutGrid</h1>
        <Outlet />
      </div>
      <div className="right-rail bg-zinc-50 p-4">
        <code>RIGHT</code>
        <Stub />
        <Stub />
        <Stub />
      </div>
      <Bottom />
    </div>
  );
}

export default LayoutGrid;
