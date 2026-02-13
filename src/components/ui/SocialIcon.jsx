const SocialIcon = ({ href, icon, account }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center p-3 md:p-4 
                 bg-accent/5 dark:bg-white/5 
                 border border-accent/10 dark:border-white/10 
                 rounded-full transition-all duration-300 
                 hover:border-sec hover:bg-sec/10 hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={icon}
        alt={account}
        className="w-5 h-5 md:w-6 md:h-6 opacity-70 group-hover:opacity-100 transition-all 
                   dark:invert" // This flips black icons to white in dark mode
      />
    </a>
  );
};

export default SocialIcon;
