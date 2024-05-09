export const ClubLogo: React.FC<{logoUrl?: string | undefined}> = ({
  logoUrl,
}) => {
  return (
    <section id="clubLogo">
      <img
        src={`https://nonleaguesocial.co.uk/assets/images/club/logo/${logoUrl}`}
      />
    </section>
  );
};
