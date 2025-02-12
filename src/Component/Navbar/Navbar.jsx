"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevState) => !prevState);
  }, []);

  const toggleDropdown = useCallback((menuName) => {
    setDropdownOpen((prevState) => (prevState === menuName ? null : menuName));
  }, []);

  const handleMobileLinkClick = () => setMenuOpen(false);

  const menus = [
    {
      name: "Development",
      links: [
        { to: "/web-development", label: "Web Development" },
        { to: "/mobile-development", label: "Mobile Development" },
        { to: "/software-development", label: "Software Development" },
      ],
    },
    {
      name: "Marketing",
      links: [
        { to: "/digital-marketing", label: "Digital Marketing" },
        { to: "/content-marketing", label: "Content Marketing" },
        { to: "/LogoDesign-branding", label: "Logo Design and Branding" },
      ],
    },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Desktop Navigation */}
      <div className={`${styles.bottomNav} ${styles.desktopNav}`}>
        <Link href="/" className={styles.logoContainer}>
          <img src="/zuditt-logo.png" alt="Logo" className={styles.logo} />
        </Link>

        <div className={styles.navLinks}>
          <Link
            href="/"
            className={pathname === "/" ? styles.activeLink : styles.navLink}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={pathname === "/about" ? styles.activeLink : styles.navLink}
          >
            About Us
          </Link>

          <Link
            href="/IT-Services"
            className={pathname === "/IT-Services" ? styles.activeLink : styles.navLink}
          >
            IT Services
          </Link>

          {menus.map((menu) => (
            <div
              key={menu.name}
              className={styles.dropdownContainer}
              onMouseEnter={() => toggleDropdown(menu.name)}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button className={styles.dropdownButton}>
                {menu.name}
                <span className={styles.dropdownArrow}>
                  <IoMdArrowDropdown />
                </span>
              </button>
              {dropdownOpen === menu.name && (
                <div className={styles.dropdownMenu}>
                  {menu.links.map((link) => (
                    <Link
                      key={link.to}
                      href={link.to}
                      className={styles.dropdownLink}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/business-outsourcing"
            className={pathname === "/business-outsourcing" ? styles.activeLink : styles.navLink}
          >
            Business Outsourcing
          </Link>

          <Link
            href="/BlockChain"
            className={pathname === "/BlockChain" ? styles.activeLink : styles.navLink}
          >
            Block Chain
          </Link>

          <Link
            href="/AI"
            className={pathname === "/AI" ? styles.activeLink : styles.navLink}
          >
            AI
          </Link>

          <Link
            href="/blog"
            className={pathname === "/blog" ? styles.activeLink : styles.navLink}
          >
            Blog
          </Link>

          <Link
            href="/contacts"
            className={pathname === "/contacts" ? styles.activeLink : styles.navLink}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={styles.mobileNav}>
        <Link href="/" className={styles.mobileLogoContainer}>
          <img src="/zuditt-logo.png" alt="Logo" className={styles.logo} />
        </Link>

        <button className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {menuOpen && (
          <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
            <Link
              href="/"
              className={styles.navLink}
              onClick={handleMobileLinkClick}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={styles.navLink}
              onClick={handleMobileLinkClick}
            >
              About Us
            </Link>

            <Link
              href="/IT-Services"
              className={styles.navLink}
              onClick={handleMobileLinkClick}
            >
              IT Services
            </Link>

            {menus.map((menu) => (
              <div
                key={menu.name}
                className={`${styles.mobileDropdown} ${styles.dropdown_main}`}
              >
                <button
                  className={styles.mobileDropdownButton}
                  onClick={() => toggleDropdown(menu.name)}
                >
                  {menu.name}
                  <span className={styles.dropdownArrow}>
                    <IoMdArrowDropdown />
                  </span>
                </button>
                {dropdownOpen === menu.name && (
                  <div className={styles.mobileDropdownMenu}>
                    {menu.links.map((link) => (
                      <Link
                        key={link.to}
                        href={link.to}
                        className={styles.dropdownLink}
                        onClick={handleMobileLinkClick}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/business-outsourcing"
              className={styles.navLink}
              onClick={handleMobileLinkClick}
            >
              Business Outsourcing
            </Link>

            <Link
              href="/BlockChain"
              className={styles.navLink}
              onClick={handleMobileLinkClick}
            >
              Block Chain
            </Link>

            <Link
              href="/AI"
              className={styles.navLink}
              onClick={handleMobileLinkClick}
            >
              AI
            </Link>

            <Link
              href="/blog"
              className={styles.navLink}
              onClick={handleMobileLinkClick}
            >
              Blog
            </Link>

            <Link
              href="/contacts"
              className={styles.navLink}
              onClick={handleMobileLinkClick}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;