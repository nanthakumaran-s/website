import React from "react";
import Image from "next/image";

import styles from "./ContactBanner.module.css";
import contact from "../../public/home/chatting.svg";
import { LuMail, LuTwitter } from "react-icons/lu";
import Link from "next/link";
import GradientText from "../../atoms/GradientText/GradientText";

const ContactBanner = () => {
  return (
    <div className={styles.contact_banner}>
      <div className={styles.inner_left}>
        <GradientText text={"Say hi!"} />
        <p className={styles.description}>
          I&apos;m just a mail away! Drop an email or DM me
        </p>
        <div />
        <div className={styles.row}>
          <Link href="mailto:nanthakumaran.ofcl@gmail.com" target="_blank">
            <div className={styles.contact_btn}>
              <LuMail size={20} />
              Mail me
            </div>
          </Link>
          <Link href="https://twitter.com/nanthakumaran_" target="_blank">
            <div className={styles.contact_btn}>
              <LuTwitter size={20} />
              DM me
            </div>
          </Link>
        </div>
      </div>
      <Image src={contact} alt="contact" className={styles.banner_img} />
    </div>
  );
};

export default ContactBanner;
