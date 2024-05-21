import {Link} from 'react-router-dom';
export const ClubLink: React.FC<{
  url: string | undefined | null;
  name: string | undefined | null;
  active: boolean | undefined | null;
}> = ({url, name, active}) => {
  return (
    <li key={name}>
      <Link to={'/club/' + url} className={active ? '' : ' InActiveClub'}>
        {name}
      </Link>
    </li>
  );
};
