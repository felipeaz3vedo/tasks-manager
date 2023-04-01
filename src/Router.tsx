import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { Home } from './pages/Home';

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
