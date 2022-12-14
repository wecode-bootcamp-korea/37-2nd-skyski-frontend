import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Monthly from './pages/Monthly/Monthly';
import MyPage from './pages/MyPage/MyPage';
import Order from './pages/Order/Order';
import Hotel from './pages/Hotel/Hotel';
import Flight from './pages/Flight/Flight';
import RedirectKakao from './components/Login/RedirectKakao';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/monthly" element={<Monthly />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/order" element={<Order />} />
        <Route path="/oauth" element={<RedirectKakao />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
