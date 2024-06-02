import {useEffect, useReducer} from 'react';
import {getClubs} from '../api/club/getClubs';
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
      //setLoadingStatus('loading');
      getClubs().then(response => {
        //setClubs(response.clubs?.success ? response.clubs.data : undefined);
        //setLoadingStatus('success');
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: response.clubs?.success ? response.clubs.data : undefined,
        });
      });
    }
    getClubsData();
  }, []);
  //}, [clubsString]);

  return [state];
};
