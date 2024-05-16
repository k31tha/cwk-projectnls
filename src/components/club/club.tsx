import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getClubDetails} from '../../api/club/getClubDetails';
import {ClubDetail} from '../../api/club/getClubDetails';
import {ClubLogo} from './clubLogo';

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
    return <div>Club not found</div>;
  } else if (clubDetail.ClubID === 0) {
    return <div>Club not found</div>;
  }
  //const {clubDetail} = await getClubDetails(urlFriendlyName as string);
  return (
    <>
      <section id="club-main" className={'mt-5'}>
        <section
          className={'mt-5 flex flex-col items-center sm:flex-row gap-5'}
        >
          <section id="club-details" className={'order-last'}>
            <h1 className={'hidden sm:block'}>{clubDetail.ClubName}</h1>
            <p className={'mt-5'}>
              {clubDetail.ClubName} also known as {clubDetail.Nicknames} are a
              current team in the non league pyramid. They are currently members
              of the (league - need different data or change api).
            </p>
            <p>
              They currently play their matches at {clubDetail.ClubAddress} †
            </p>
            <p>
              For more information see the club website{' '}
              <a target="_blank" href={clubDetail.MainWebsite ?? 'tbc'}>
                click here
              </a>{' '}
              or wikipedia{' '}
              <a target="_blank" href={clubDetail.ClubWikiLink ?? 'tbc'}>
                click here
              </a>
            </p>
          </section>
          {clubDetail.ClubLogo ? (
            <ClubLogo
              logoUrl={clubDetail.ClubLogo}
              clubName={clubDetail.ClubName ?? ''}
            />
          ) : (
            <></>
          )}
        </section>
      </section>
      <section id="club-social">
        <h2>Social Media</h2>
        <p className={'italic'}>(to flesh out from different object)</p>
        <ul></ul>
      </section>
      <p className={'mt-5 italic'}>
        † nonleaguesocial.co.uk does not guarantee or warrant the accuracy or
        reliability of any information{' '}
      </p>
    </>
  );
};

/*
{clubDetail.SocialMedia.map(socialMedia => (
          <li key={socialMedia.SocialMediaId}>
            <a href={socialMedia.Url}>{socialMedia.Name}</a>  
          </li>
        ))}
*/
