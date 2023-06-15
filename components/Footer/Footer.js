import React from "react";
import Link from "next/link";

import styles from "./Footer.module.css";
import { getSocials, navLinks } from "../../data/nav.data";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© Nanthakumaran S</p>
      <div className={styles.links}>
        {navLinks.map((item, index) => (
          <Link href={item.route} key={index}>
            <span className={styles.link_item}>{item.displayName}</span>
          </Link>
        ))}
      </div>
      <div className={styles.social}>
        {getSocials(18).map((item, index) => (
          <a href={item.link} target="blank" key={index}>
            <span className={styles.social_icon}>{item.icon}</span>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
