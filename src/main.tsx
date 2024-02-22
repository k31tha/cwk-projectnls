import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Link} from 'react-router-dom';
import ErrorPage from './components/error/ErrorPage';
//import './index.css';
import Root from './components/routes/route';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>home</div>,
      },
      {
        path: 'club/:id',
        element: <div>club with name</div>,
      },
      {
        path: 'club',
        element: (
          <>
            <div>club search</div>
            <ul>
              <li>
                <Link to={`/club/woking-fc`}>woking fc</Link>
              </li>
            </ul>
          </>
        ),
      },
      {
        path: 'blog',
        element: <div>blog</div>,
      },
    ],
  },
]);

//just creates  basic routing for the app. The first route is the root route and the second route is the club route. The element prop is the component that will be rendered when the route is matched. The path prop is the path that will be matched to the current URL.

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
