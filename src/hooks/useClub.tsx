import {useEffect, useReducer} from 'react';
import {getClubDetails} from '../api/club/getClubDetails';
import {clubReducer} from '../reducers/clubReducer';
//import {boolean, string} from 'zod';
export const useClub = (urlFriendlyName: string) => {
  const [state, dispatch] = useReducer(clubReducer, {
    isError: false,
    loadingStatus: 'loading',
    clubDetail: null,
  });
  useEffect(() => {
    async function getClubData(urlFriendlyName: string) {
      dispatch({type: 'FETCH_INIT'});
      //setLoadingStatus('loading');
      getClubDetails(urlFriendlyName as string).then(response => {
        //setClubs(response.clubs?.success ? response.clubs.data : undefined);
        //setLoadingStatus('success');
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: response.clubDetail?.success
            ? response.clubDetail.data
            : undefined,
        });
      });
    }
    getClubData(urlFriendlyName);
  }, [urlFriendlyName]);
  //}, [clubsString]);

  return [state];
};
