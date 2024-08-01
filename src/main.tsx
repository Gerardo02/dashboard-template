import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { ThemeProvider } from './components/theme/theme-provider.tsx'
import Root from './components/routes/root.tsx';
import Overview from './components/routes/overview.tsx';
import ErrorPage from './components/errors/error_page.tsx';
import Companies from './components/routes/companies.tsx';
import Estate from './components/routes/estate.tsx';
import Clients from './components/routes/clients.tsx';
import Analytics from './components/routes/analytics.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/estate",
        element: <Estate />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
