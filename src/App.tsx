import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';

import LayoutSimple from '@/layouts/LayoutSimple';
import LayoutStandard from '@/layouts/LayoutStandard';
import LayoutGrid from '@/layouts/LayoutGrid';

function App() {
  return (
    <div id="app" className="lg:container lg:mx-auto h-lvh bg-white">
      <BrowserRouter>
        <Routes>
          <Route element={ <LayoutSimple /> }>
            <Route path="/" element={ <Home /> } />
          </Route>
          <Route element={ <LayoutStandard /> }>
            <Route path="/dashboard" element={ <Dashboard /> } />
          </Route>
          <Route element={ <LayoutGrid /> }>
            <Route path="/dashboard-grid" element={ <Dashboard /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
