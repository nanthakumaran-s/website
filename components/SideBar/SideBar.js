import React from "react";
import { useRouter } from "next/navigation";

import styles from "./SideBar.module.css";
import { navLinks } from "../../data/nav.data";
import { MdClose } from "react-icons/md";

const SideBar = ({ setShow }) => {
  const router = useRouter();

  const route = (route) => {
    router.push(route);
    setShow(false);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.inner}>
        {navLinks.map((item, index) => (
          <span
            onClick={() => route(item.route)}
            key={index}
            className={styles.link_item}
          >
            {item.displayName}
          </span>
        ))}
        <div className={styles.close} onClick={() => setShow(false)}>
          <MdClose size={30} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
