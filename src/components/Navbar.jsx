import { useState, useEffect, useRef } from "react";
import Hamburger from "../assets/icons/hamburger.svg";
import Close from "../assets/icons/hamburgerClose.svg";
import Logo from "../assets/icons/Logo.svg";
import Bella from "../assets/images/userLogin.png";
import Service from "../assets/icons/customerService.svg";
import Bell from "../assets/icons/bell.svg";
import { NavData } from "../constants";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(1);

  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    toggleSidebar();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Background overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-10"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 w-64 bg-white text-dark-blue p-4 transition-transform transform z-20 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo and Hamburger icon */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
            <p className="text-light-blue text-3xl font-semibold">NSTYLE</p>
          </div>
          <button onClick={toggleSidebar}>
            <img src={Close} alt="Hamburger" className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar content */}
        <ul>
          {NavData.map((item, id) => (
            <li key={id}>
              <div
                className={`flex p-5 rounded-xl items-center w-[200px] h-[70px] ${
                  selectedId === id
                    ? "bg-dark-blue text-white"
                    : "bg-white text-dark-blue"
                } ml-3`}
                onClick={() => handleClick(id)}
              >
                <img
                  src={item.src}
                  alt={`Logo ${id}`}
                  className="w-6 h-6 mr-2 text-text-color text-3xl font-normal"
                />
                <span
                  className={`text-text-color text-3xl font-normal ${
                    selectedId === id
                      ? "bg-dark-blue text-white"
                      : "bg-white text-dark-blue "
                  }`}
                  onClick={() => handleClick(id)}
                >
                  {item.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar */}
      <nav className="p-6 pt-9 flex justify-between items-center">
        <button onClick={handleButtonClick}>
          <img
            src={Hamburger}
            alt="Hamburger"
            className="flex shrink-0 w-[36.514px] h-[30.896px]"
          />
        </button>

        <div className="flex items-center">
          <div className="hidden lg:flex items-center mx-20">
            <img
              src={Bella}
              alt="User"
              className="w-[71.79px] h-[71.79px] rounded-full mr-4"
            />
            <div className="flex flex-col">
              <span className="text-dark-blue text-3xl font-bold">
                Bella Famina
              </span>
              <span className="text-gray text-xl font-normal">
                Joined 2 months ago
              </span>
            </div>
          </div>
          <div className="mx-2">
            <button>
              <img
                src={Service}
                alt="service"
                className="w-[46.02px] h-[46.02px]"
              />
            </button>
          </div>

          <div className="mx-2 relative">
            <button>
              <img
                src={Bell}
                alt="notification"
                className="w-[46.02px] h-[46.02px]"
              />
              <div className="absolute inset-y-1 right-2 w-[11.529px] h-[12.007px] bg-light-blue rounded-full"></div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
