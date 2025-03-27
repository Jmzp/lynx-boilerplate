import { MemoryRouter, Routes, Route } from 'react-router';
import Home from '../screens/Home/Home.tsx';
import PageError from '../screens/PageError/PageError.tsx';

const MainNavigation = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PageError />} />
      </Routes>
    </MemoryRouter>
  );
};

export default MainNavigation;
