const Navbar = () => {
  return (
    <>
      <div className="bg-[#b7302a]">
        <div className="p-2 text-white flex md:w-[80%] mx-auto">
          <div className="flex items-center gap-2 flex-grow">
            <div className="w-6 h-6">
              <img
                src="https://ekalblspindia.org/wp-content/uploads/2023/10/affiliate.png"
                alt="share icon"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs md:text-sm">
              Affiliated with Ekal Abhiyan
            </span>
          </div>
          <button className="text-xs md:text-sm">Volunteer</button>
          <button className="text-xs md:text-sm ml-2 md:ml-8">
            Contact Us
          </button>
        </div>
      </div>
      <div className="p-2 md:px-0 flex items-center justify-between mx-auto w-full md:w-[80%]">
        <div className="w-12 md:w-20 md:h-16 h-11">
          <img
            src="https://ekalblspindia.org/wp-content/uploads/2023/10/BLSP_LOGO_PNG-1.png"
            alt="bharat lok shikha parishad icon"
            className="w-full h-full object-cover"
          />
        </div>
        <nav className="hidden md:flex text-xs md:text-sm font-medium gap-10">
          <div>
            Who We Are
            <i className="fa-solid fa-caret-down ml-3"></i>
          </div>
          <div>
            Who We Do
            <i className="fa-solid fa-caret-down ml-3"></i>
          </div>
          <div>
            Achievements
            <i className="fa-solid fa-caret-down ml-3"></i>
          </div>
          <div>
            Media Centre
            <i className="fa-solid fa-caret-down ml-3"></i>
          </div>
        </nav>
        <div className="flex items-center gap-7">
          <button className="text-xs md:text-base bg-[#b7302a] px-2 py-1 rounded-md text-nowrap text-white">
            Donate Now
          </button>
          <button className="w-6 h-6 md:hidden">
            <svg
              aria-hidden="true"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="#b7302a"
            >
              <path d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
