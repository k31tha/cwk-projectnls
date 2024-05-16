export const ClubLogo: React.FC<{logoUrl: string; clubName: string}> = ({
  logoUrl,
  clubName,
}) => {
  return (
    <section id="clubLogo">
      <img
        className={'p-5 max-w-32 h-auto'}
        alt={`${clubName} Club Logo`}
        src={`https://nonleaguesocial.co.uk/assets/images/club/logo/${logoUrl}`}
      />
    </section>
  );
};
