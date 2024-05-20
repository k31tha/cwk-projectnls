import React, {useEffect, useState} from 'react';
import {getClubs, Clubs} from '../../api/club/getClubs';
import {ClubLinkList} from './clubLinkList';

export const ClubSearch: React.FC = () => {
  const [clubs, setClubs] = useState<Clubs | undefined>();
  useEffect(() => {
    getClubs().then(response => {
      setClubs(response.clubs?.success ? response.clubs.data : undefined);
    });
  }, []);
  if (!clubs || clubs.length === 0) {
    return <div>No clubs found</div>;
  }
  return (
    <>
      <div>club search</div>
      <p>
        No of clubs is{' '}
        <span data-test-id="club-search-count">{clubs?.length}</span>
      </p>
      <ClubLinkList clubs={clubs} />
    </>
  );
};
