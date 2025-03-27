import { MemoryRouter, Routes, Route } from 'react-router';
import Home from '../screens/Home/Home.tsx';
import PageError from '../screens/PageError/PageError.tsx';
import Details from '../screens/Details/Details.tsx';
import { NAVIGATION } from '../constants/index.js';

const MainNavigation = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path={NAVIGATION.home} element={<Home />} />
        <Route path={NAVIGATION.details} element={<Details />} />
        <Route element={<PageError />} />
      </Routes>
    </MemoryRouter>
  );
};

export default MainNavigation;
