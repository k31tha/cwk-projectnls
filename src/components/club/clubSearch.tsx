import React, {useEffect, useState} from 'react';
import {getClubs, Clubs} from '../../api/club/getClubs';
import {ClubLinkList} from './clubLinkList';
import {filterByClubName} from '../../bll/filters/club/filterByClubName';

export const ClubSearch: React.FC = () => {
  const [loadingStatus, setLoadingStatus] = useState<string>('pending');
  const [clubs, setClubs] = useState<Clubs | undefined>();
  const [searchClubName, setSearchClubName] = useState<string>('');

  //function handleSearchNameChange(e) {
  //  setSearchClubName(e.target.value);
  //}
  const handleSearchNameChange: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    setSearchClubName(e.target.value);
  };

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
  //if (!clubs || clubs.length === 0) {
  // return <div>No clubs found</div>;
  //}

  const filteredList = clubs
    ?.filter(filterByClubName(searchClubName))
    .sort((a, b) => (a.ClubName! >= b.ClubName! ? 1 : -1));

  if (loadingStatus === 'pending') {
    return <div>loading component</div>;
  } else if (loadingStatus === 'loading') {
    return <div>loading clubs</div>;
  } else if (loadingStatus === 'error') {
    return <div>error occured</div>;
  } else if (loadingStatus === 'success') {
    return (
      <>
        <div>club search</div>
        <>
          {'search by club name:'}
          <input
            className="border-2"
            type="text"
            value={searchClubName}
            aria-label="club-search"
            name="club-search"
            onChange={handleSearchNameChange}
          />
        </>
        <p>
          No of clubs is{' '}
          <span data-test-id="club-search-count">{filteredList?.length}</span>
        </p>
        {!filteredList || filteredList.length === 0 ? (
          <div>no clubs found</div>
        ) : (
          <ClubLinkList clubs={filteredList} />
        )}
      </>
    );
  }
  return <div>should not get here</div>;
};
