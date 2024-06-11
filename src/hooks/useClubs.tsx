import {useEffect, useReducer} from 'react';
import {getClubs, Clubs} from '../api/club/getClubs';
import {clubsReducer} from '../reducers/clubsReducer';
//import {boolean, string} from 'zod';
export const useClubs = () => {
  const [state, dispatch] = useReducer(clubsReducer, {
    isError: false,
    loadingStatus: 'loading',
    clubs: [],
  });
  useEffect(() => {
    async function getClubsData() {
      dispatch({type: 'FETCH_INIT'});
      await getClubs().then(response => {
        dispatch({
          type: response.response.ok ? 'FETCH_SUCCESS' : 'FETCH_FAILURE',
          payload: response.response.ok ? (response.clubs as Clubs) : undefined,
        });
      });
    }
    getClubsData();
  }, []);
  //}, [clubsString]);

  return [state];
};
