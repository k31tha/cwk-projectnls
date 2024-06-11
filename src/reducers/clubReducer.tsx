import {ClubFullDetail} from '../api/club/getClubDetails';

export const initialState = {
  isError: false,
  loadingStatus: 'loading',
  clubDetail: null as ClubFullDetail | null,
};

export type ClubState = typeof initialState;
type ACTIONTYPE =
  | {
      type: 'FETCH_SUCCESS' | 'FETCH_SUCCESS';
      payload?: ClubFullDetail | undefined;
    }
  | {type: 'FETCH_FAILURE' | 'FETCH_INIT'};

export const clubReducer = (
  state: ClubState = initialState,
  action: ACTIONTYPE,
) => {
  if (action.type === 'FETCH_INIT') {
    return {
      ...state,
      loadingStatus: 'loading',
      isError: false,
    };
  } else if (action.type === 'FETCH_SUCCESS') {
    return {
      ...state,
      loadingStatus: 'success',
      isError: false,
      clubDetail: action.payload || null,
    };
  }
  return state;
};
