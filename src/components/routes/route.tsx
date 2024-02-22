import {Outlet, Link, useMatch} from 'react-router-dom';

export default function Root() {
  const match = useMatch('/');
  return (
    <>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to={`/`}>home</Link>
            </li>
            <li>
              <Link to={`/club`}>clubs</Link>
            </li>

            <li>
              <Link to={`/blog`}>blog</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
