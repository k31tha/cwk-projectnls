import React, {useEffect, useState} from 'react';
import {getClubs, Clubs} from '../../api/club/getClubs';
import {ClubLinkList} from './clubLinkList';
import {filterByClubName} from '../../bll/filters/club/filterByClubName';

export const ClubSearch: React.FC = () => {
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

  useEffect(() => {
    getClubs().then(response => {
      //console.log('getClubs response!!', response.clubs);
      setClubs(response.clubs?.success ? response.clubs.data : undefined);
      console.log(clubs);
    });
  }, [clubs]);
  if (!clubs || clubs.length === 0) {
    return <div>No clubs found</div>;
  }

  const filteredList = clubs
    ?.filter(filterByClubName(searchClubName))
    .sort((a, b) => (a.ClubName! >= b.ClubName! ? 1 : -1));

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
      <ClubLinkList clubs={filteredList} />
    </>
  );
};
