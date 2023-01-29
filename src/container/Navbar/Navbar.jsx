import React, { useState } from "react";
import { images } from "../../constants";
import { AnimatePresence, motion } from "framer-motion";
import {
  logoAnimation,
  ListVariants,
  NavbarVariants,
  modalAnimation,
  modalListAnimation,
} from "../../constants/Variants";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <motion.nav initial="initial" whileInView="animate" className="app__nav">
      <div className="app__nav_logo">
        <motion.img
          custom={1}
          variants={logoAnimation}
          className={toggleMenu ? "hide" : "show"}
          src={images.logo}
          alt="logo"
          onClick={() => document.location.reload()}
        />
      </div>

      <motion.ul
        initial="initial"
        variants={NavbarVariants}
        whileInView="animate"
        exit="exit"
        className="app__nav_links"
      >
        <motion.li variants={ListVariants}>
          <a href="#features">Features</a>
        </motion.li>
        <motion.li variants={ListVariants}>
          <a href="#pricing">Pricing</a>
        </motion.li>
        <motion.li variants={ListVariants}>
          <a href="#contact">Contact</a>
        </motion.li>
        <motion.button custom={8} variants={logoAnimation}>
          Login
        </motion.button>
      </motion.ul>

      <div className="app__nav_hamburger">
        <img
          className={toggleMenu ? "hide" : "show"}
          src={images.hamburger}
          alt="menu"
          onClick={() => {
            setToggleMenu(true);
            document.querySelector("body").classList.add("overflow");
          }}
        />
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              initial="initial"
              variants={modalAnimation}
              className="app__nav_menu"
              whileInView="animate"
              exit="exit"
            >
              <div>
                <div className="app__nav_menu-heading">
                  <div>
                    <img src={images.logoNav} alt="logo nav" />
                  </div>
                  <div>
                    <img
                      onClick={() => {
                        setToggleMenu(false);
                        document
                          .querySelector("body")
                          .classList.remove("overflow");
                      }}
                      src={images.close}
                      alt="close menu"
                    />
                  </div>
                </div>
                <ul className="app__nav_menu-list">
                  <motion.li variants={modalListAnimation}>Features</motion.li>
                  <motion.li variants={modalListAnimation}>Pricing</motion.li>
                  <motion.li variants={modalListAnimation}>Contact</motion.li>
                  <motion.button variants={modalListAnimation}>
                    Login
                  </motion.button>
                </ul>
                <div className="app__nav_menu-socials">
                  <img src={images.facebook} alt="facebook logo" />
                  <img src={images.twitter} alt="twitter logo" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
