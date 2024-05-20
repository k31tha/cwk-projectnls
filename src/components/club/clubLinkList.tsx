import {Link} from 'react-router-dom';
import {Clubs} from '../../api/club/getClubs';
import {ClubLink} from './clubLink';
export const ClubLinkList: React.FC<{
  clubs: Clubs;
}> = ({clubs}) => {
  if (clubs === undefined || clubs === null || clubs.length === 0) {
    return (
      <div data-testid="empty-club-list" className="list-items">
        empty list
      </div>
    );
  }
  return (
    <ul data-testid="search-club-list">
      {clubs?.map(club => (
        <ClubLink
          key={club.UrlFriendlyName!}
          {...{
            url: club.UrlFriendlyName!,
            name: club.ClubName,
            active: club.Active,
          }}
        />
      ))}
    </ul>
  );
};
