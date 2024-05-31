import {useEffect, useState} from 'react';
import {getClubs, Clubs} from '../api/club/getClubs';
export const useClubs = () => {
  const [loadingStatus, setLoadingStatus] = useState<string>('pending');
  const [clubs, setClubs] = useState<Clubs | undefined>();
  const [isError, setIsError] = useState<boolean>(false);

  const clubsString = JSON.stringify(clubs);
  useEffect(() => {
    const getClubsData = async () => {
      setLoadingStatus('loading');
      getClubs().then(response => {
        setClubs(response.clubs?.success ? response.clubs.data : undefined);
        setLoadingStatus('success');
      });
    };
    getClubsData();
  }, [clubsString]);

  return [{clubs, loadingStatus, isError}];
};
