import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import Loader from './components/Loader.jsx';

function App() {
  const Login = React.lazy(() => import('./pages/auth/Login'));

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
