import {ClubDetail} from '../../../api/club/getClubs';
export const filterByClubName = (clubName: string) => (club: ClubDetail) =>
  !clubName || club?.ClubName?.toLowerCase().includes(clubName.toLowerCase());
