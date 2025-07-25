import Logo from "./Logo";
const Footer = () => {
  return (
    <footer className="w-full dark:bg-background bg-dark-background h-20 flex justify-center">
      <div className="w-full max-w-[450px] flex justify-around items-center">
        <Logo />
        <div className="dark:text-accent text-dark-accent">
          <p>&copy; 2025 CeeJay All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
