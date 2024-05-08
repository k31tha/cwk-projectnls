import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Link} from 'react-router-dom';
import ErrorPage from './components/error/ErrorPage';
import {Club} from './components/club/club';

import Layout from './components/structure/Layout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>home</div>,
      },
      {
        path: 'club/:urlFriendlyName',
        element: <Club />,
      },
      {
        path: 'club',
        element: (
          <>
            <div>club search</div>
            <ul>
              <li>
                <Link to={`/club/woking`}>woking</Link>
              </li>
            </ul>
          </>
        ),
      },
      {
        path: 'blog',
        element: <div>blog</div>,
      },
      {
        path: 'pyramid',
        element: <div>pyramid page</div>,
      },
      {
        path: 'about',
        element: <div>about page</div>,
      },
    ],
  },
]);

//just creates  basic routing for the app. The first route is the root route and the second route is the club route. The element prop is the component that will be rendered when the route is matched. The path prop is the path that will be matched to the current URL.

async function enableMocking() {
  console.log('enableMocking');
  console.log(process.env.NODE_ENV);
  console.dir(import.meta.env);
  if (
    process.env.NODE_ENV !== 'development' &&
    process.env.NODE_ENV !== 'testing!'
  ) {
    return;
  }

  const {worker} = await import('./api/mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
});
