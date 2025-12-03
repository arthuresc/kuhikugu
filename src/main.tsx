import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

// import './styles.css'
import './style/index.css';
import reportWebVitals from './reportWebVitals.ts';

import Header from './components/Header/Header';
import Home from './features/Main/Home.tsx';
import Produto from './features/Main/Pages/Produto.tsx';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      {/* <Home /> */}
      {/* resolver o sidebar depois */}
      <Outlet />
      <TanStackRouterDevtools />
      <footer className="bg-neutral-900 h-[40dvh]">Footer</footer>
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});
const produtoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/produtos',
  component: Produto,
});

const routeTree = rootRoute.addChildren([indexRoute, produtoRoute]);

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

const rootElement = document.getElementById('root');
if (rootElement && !rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
