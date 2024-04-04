import React, { useState, useEffect } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
function Header() {
    const [menuActive, setMenuActive] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      // Sticky navigation bar
      setStickyHeader(window.scrollY > 100);
      
      clearTimeout(scrollTimeout);
      setHideNavbar(false);

      scrollTimeout = setTimeout(() => {
        setHideNavbar(true);
      }, 500);

      // Scroll sections active link
      const sections = document.querySelectorAll('section');
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        const navLinks = document.querySelectorAll('header nav a');
        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle('dark-mode');
//   };

  const handleNavLinkClick = (id, event) => {
    // Remove 'active' class from all navigation links
    document.querySelectorAll('header nav a').forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked link
    event.target.classList.add('active');
    setMenuActive(false);
  };
  return (
       <div>
      <header className={`header ${stickyHeader ? 'sticky' : ''}`}>
        <a href="#" className="logo"> FYN </a>
        <nav className={`navbar ${menuActive ? 'active' : ''}`}>
          <a href="#Home1" className="active" onClick={(event) => handleNavLinkClick('Home1', event)}>Home</a>
          <a href="#Services" onClick={(event) => handleNavLinkClick('Services', event)}>Services</a>
          <a href="#Gallery" className="active" onClick={(event) => handleNavLinkClick('Gallery', event)}>Gallery</a>
          <a href="#Testimonials" onClick={(event) => handleNavLinkClick('Testimonials', event)}>Testimonials</a>
          <a href="#ServiceSet" onClick={(event) => handleNavLinkClick('ServiceSet', event)}>Connect Us</a>
          <Link href="#Dashboard" to="/Dashboard2" onClick={(event) => handleNavLinkClick('Dashboard', event)}>Dashboard</Link>
          {/* <a href="#Contact" onClick={(event) => handleNavLinkClick('Contact', event)}>Contact</a> */}
        </nav>
        {/* <div id="dark-mode" onClick={toggleDarkMode}>
          {darkMode ?  <MdOutlineBrightness2 />:<MdDarkMode /> }
        </div> */}
        <div id="menu-icon" onClick={toggleMenu}>
        {menuActive ?   <IoMdClose />:<IoMenu />   }
         
        
        </div>
      </header>
    </div>
  )
}

export default Header