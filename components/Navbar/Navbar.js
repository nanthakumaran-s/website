"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { navLinks, navSocial } from "../../data/nav.data";
import { LuMoon, LuSun } from "react-icons/lu";
import useColorTheme from "../../hooks/useColorTheme";

export default function Navbar() {
  const [mode, setMode] = useColorTheme();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.links}>
          {navLinks.map((item, index) => (
            <Link href={item.route} key={index}>
              <span className={styles.link_item}>{item.displayName}</span>
            </Link>
          ))}
        </div>
        <div className={styles.social}>
          {navSocial.map((item, index) => (
            <a href={item.link} target="blank" key={index}>
              <span className={styles.social_icon}>{item.icon}</span>
            </a>
          ))}
          <div className={styles.vertical_bar} />
          <span
            className={styles.social_icon}
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          >
            {mode == "dark" ? <LuSun size={20} /> : <LuMoon size={20} />}
          </span>
        </div>
      </nav>
    </header>
  );
}
