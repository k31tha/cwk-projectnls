import {Link} from 'react-router-dom';
const MainNav: React.FC = () => {
  return (
    <>
      <nav className="hidden sm:flex flex-row text-1xl justify-center grow">
        <Link className="m-2.5" to={`/club`}>
          clubs
        </Link>
        <Link className="m-2.5" to={`/pyramid`}>
          pyramid
        </Link>
        <Link className="m-2.5" to={`/blog`}>
          blog
        </Link>
        <Link className="m-2.5" to={`/about`}>
          about
        </Link>
      </nav>
    </>
  );
};
export default MainNav;
