const HamburgerMenu: React.FC<{
  isMobileMenuOpened: boolean;
  mobileMenuClicked: () => void;
}> = ({isMobileMenuOpened, mobileMenuClicked}) => {
  return (
    <>
      <button
        id="btn-hamburger-key-apply"
        className={`h-10 w-10 border-2 border-solid border-black rounded-lg sm:hidden ${
          isMobileMenuOpened ? 'open-apply' : ''
        }`}
        onClick={mobileMenuClicked}
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="h-0.5 w-4 bg-black  duration-200"></span>
          <span className="h-0.5 w-4 bg-black  duration-200"></span>
          <span className="h-0.5 w-4 bg-black duration-200"></span>
        </div>
      </button>
    </>
  );
};
export default HamburgerMenu;
