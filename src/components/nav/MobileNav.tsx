import {Link} from 'react-router-dom';
const MobileNav: React.FC<{isMobileMenuOpened: boolean}> = ({
  isMobileMenuOpened,
}) => {
  return (
    <section
      id="mobile-menu"
      className={`absolute top-10 -left-[1500px] bg-white overflow-hidden w-full transition-[left] duration-[0.5s] sm:hidden ${
        isMobileMenuOpened ? 'show-apply' : ''
      }`}
    >
      <div id="mobile-menu-inner">
        <nav id="mobile-nav" className="p-4 border-solid border-black border-2">
          <Link
            className="block text-gray-700 text-base font-medium py-2"
            to={'/club'}
          >
            clubs
          </Link>
          <Link
            className="block text-gray-700 text-base font-medium py-2"
            to={'/pyramid'}
          >
            pyramid
          </Link>
          <Link
            className="block text-gray-700 text-base font-medium py-2"
            to={'/blog'}
          >
            blog
          </Link>
          <Link
            className="block text-gray-700 text-base font-medium py-2"
            to={'/about'}
          >
            about
          </Link>
        </nav>
      </div>
    </section>
  );
};
export default MobileNav;
