import {Outlet} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  //const match = useMatch('/');
  return (
    <section className="max-w-1000 mx-auto px-6">
      {/* other elements */}
      <Header />
      {/* other elements */}

      <div id="detail">
        <Outlet />
      </div>

      <footer id="footer">
        {/* other elements */}
        <Footer />
        {/* other elements */}
      </footer>
    </section>
  );
};
export default Layout;
