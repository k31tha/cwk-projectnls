import {Link} from 'react-router-dom';
import {useState} from 'react';
import MainNav from '../nav/MainNav';
import HamburgerMenu from '../nav/HamburgerMenu';
import MobileNav from '../nav/MobileNav';

const Header: React.FC = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  return (
    <header className="sticky top-0 bg-gradient-to-b from-[#00FFFF] to-[#00FF00]">
      <section className="flex flex-row text-xl justify-between items-center mx-auto max-w-screen-lg">
        <Link className="mr-8 no-underline text-2xl" to={`/`}>
          NLS
        </Link>
        <MainNav />
        <HamburgerMenu
          isMobileMenuOpened={mobileMenuOpened}
          mobileMenuClicked={() => setMobileMenuOpened(!mobileMenuOpened)}
        />
      </section>
      <MobileNav isMobileMenuOpened={mobileMenuOpened} />
    </header>
  );
};
export default Header;
