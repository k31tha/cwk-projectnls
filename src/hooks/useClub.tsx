import {useEffect, useReducer} from 'react';
import {ClubFullDetail, getClubDetails} from '../api/club/getClubDetails';
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
      await getClubDetails(urlFriendlyName as string).then(response => {
        if (!response.response.ok) {
          dispatch({type: 'FETCH_FAILURE'});
        } else {
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: response.clubDetail as ClubFullDetail,
          });
        }
      });
    }
    getClubData(urlFriendlyName);
  }, [urlFriendlyName]);

  return [state];
};
