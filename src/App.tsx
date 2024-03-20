import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';

import LayoutStandard from '@/layouts/LayoutStandard';
import LayoutSimple from '@/layouts/LayoutSimple';

function App() {
  return (
    <div id="app" className="container h-lvh mx-auto bg-white">
      <BrowserRouter>
        <Routes>
          <Route element={ <LayoutSimple /> }>
            <Route path="/" element={ <Home /> } />
          </Route>
          <Route element={ <LayoutStandard /> }>
            <Route path="/dashboard" element={ <Dashboard /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
