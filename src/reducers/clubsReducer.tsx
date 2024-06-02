import {Clubs} from '../api/club/getClubs';

export const initialState = {
  isError: false,
  loadingStatus: 'loading',
  clubs: [] as Clubs,
};

export type ClubsState = typeof initialState;
type ACTIONTYPE =
  | {
      type: 'FETCH_SUCCESS' | 'FETCH_SUCCESS';
      payload?: Clubs | undefined;
    }
  | {type: 'FETCH_FAILURE' | 'FETCH_INIT'};

export const clubsReducer = (
  state: ClubsState = initialState,
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
      clubs: action.payload || [],
    };
  }
  return state;
};
