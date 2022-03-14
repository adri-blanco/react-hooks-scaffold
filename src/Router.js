import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Index = React.lazy(() => import('./pages/Index'));
const Demo = React.lazy(() => import('./pages/Demo'));

function Router() {
  return (
    <React.Suspense fallback={<>...</>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </React.Suspense>
  );
}

export default Router;
