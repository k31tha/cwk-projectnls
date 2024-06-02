import {useState} from 'react';
import {ClubLinkList} from './clubLinkList';
import {filterByClubName} from '../../bll/filters/club/filterByClubName';
import {useClubs} from '../../hooks/useClubs';

export const ClubSearch: React.FC = () => {
  const [{clubs, loadingStatus, isError}] = useClubs();
  const [searchClubName, setSearchClubName] = useState<string>('');

  //function handleSearchNameChange(e) {
  //  setSearchClubName(e.target.value);
  //}
  const handleSearchNameChange: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    setSearchClubName(e.target.value);
  };

  const filteredList = clubs
    ?.filter(filterByClubName(searchClubName))
    .sort((a, b) => (a.ClubName! >= b.ClubName! ? 1 : -1));

  if (loadingStatus === 'pending') {
    return <div>loading component</div>;
  } else if (loadingStatus === 'loading') {
    return <div>loading clubs</div>;
  } else if (loadingStatus === 'error' || isError) {
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
