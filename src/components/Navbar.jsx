import { useState } from "react";
import { useTranslation } from "react-i18next";
import brand from "../assets/brandJr.png";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import LanguageSwitcher from "../LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  //toggle menu for mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  //for smooth scrolling
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const translatedLinks = [
    { label: t("navbar.about"), href: "#about" },
    { label: t("navbar.skills"), href: "#skills" },
    { label: t("navbar.projects"), href: "#projects" },
    { label: t("navbar.experience"), href: "#experience" },
    { label: t("navbar.hobbies"), href: "#hobbies" },
    { label: t("navbar.contact"), href: "#contact" },
  ];

  return (
    <div>
      <nav className="fixed flex justify-center min-w-full left-0 right-0 top-0 z-50  bg-black/50 backdrop-blur ">
        {/* Desktop and tablet Menu */}
        <div className="container hidden items-center   py-2 md:flex">
          <div className="flex w-full  justify-between gap-6">
            <div>
              <a href="#">
                <img src={brand} width={160} alt="logo" />
              </a>
            </div>

            <div className="flex items-center">
              <ul className="flex items-center gap-2 lg:gap-4">
                {translatedLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-lg  lg:text-xl hover:text-yellow-600"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="w-full  md:hidden">
          <div className="container flex items-center justify-between mx-auto">
            <div>
              <a href="#">
                <img src={brand} width={120} alt="logo" className="my-2" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
              <LanguageSwitcher />
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="container mx-auto mt-4 flex-col gap-4 backdrop-blur-md">
              {translatedLinks.map((item, index) => (
                <li key={index}>
                  <a
                    className="block text-xl font-semibold"
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
