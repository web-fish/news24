import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './scss/index.scss';

import Header from './Components/Header/Header';
import Aside from './Components/Aside/Aside';
import Footer from './Components/Footer/Footer';

import Main from './Pages/Main/Main';
import Business from './Pages/Business/Business';
import Health from './Pages/Health/Health';
import Entertainment from './Pages/Entertainment/Entertainment';
import Science from './Pages/Science/Science';
import Sport from './Pages/Sport/Sport';
import Technology from './Pages/Technology/Technology';
import Error from './Components/Error/Error';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="business" element={<Business />} />
        <Route path="health" element={<Health />} />
        <Route path="entertainment" element={<Entertainment />} />
        <Route path="science" element={<Science />} />
        <Route path="sports" element={<Sport />} />
        <Route path="technology" element={<Technology />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

function Layout() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Aside />
        <section className="content">
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  )
};



