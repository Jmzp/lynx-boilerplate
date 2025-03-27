import { MemoryRouter, Routes, Route } from 'react-router';
import Home from '../screens/Home/index.js';

const MainNavigation = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
};

export default MainNavigation;
