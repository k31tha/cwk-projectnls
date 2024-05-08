import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getClubDetails} from '../../api/club/getClubDetails';
import {ClubDetail} from '../../api/club/getClubDetails';

export const Club: React.FC = () => {
  const {urlFriendlyName} = useParams();
  const [clubDetail, setClubDetail] = useState<ClubDetail | undefined>();

  useEffect(() => {
    getClubDetails(urlFriendlyName as string).then(response => {
      setClubDetail(
        response.clubDetail?.success ? response.clubDetail.data : undefined,
      );
    });
  }, [urlFriendlyName]);
  if (!clubDetail) {
    return <div>Loading Club...</div>;
  }
  //const {clubDetail} = await getClubDetails(urlFriendlyName as string);
  return (
    <div>
      <h1>{urlFriendlyName}</h1>
    </div>
  );
};
