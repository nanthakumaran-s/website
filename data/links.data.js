import {
  LuGithub,
  LuLinkedin,
  LuMail,
  LuTwitter,
  LuYoutube,
} from "react-icons/lu";
import { SiMedium, SiHashnode } from "react-icons/si";

const size = 20;

export const links = [
  {
    name: "nanthakumaran.ofcl@gmail.com",
    link: "mailto:nanthakumaran.ofcl@gmail.com",
    icon: <LuMail size={size} />,
  },
  {
    name: "nanthakumaran-s",
    link: "https://linkedin.com/in/nanthakumaran-s",
    icon: <LuLinkedin size={size} />,
  },
  {
    name: "nanthakumaran-s",
    link: "https://github.com/nanthakumaran-s",
    icon: <LuGithub size={size} />,
  },
  {
    name: "@nanthakumaran_",
    link: "https://twitter.com/nanthakumaran_",
    icon: <LuTwitter size={size} />,
  },
  {
    name: "@nanthakumaran-s",
    link: "https://www.youtube.com/@nanthakumaran-s",
    icon: <LuYoutube size={size} />,
  },
  {
    name: "nanthakumaran.medium.com",
    link: "https://nanthakumaran.medium.com/",
    icon: <SiMedium size={size} />,
  },
  {
    name: "blog.nanthakumaran.com",
    link: "https://blog.nanthakumaran.com/",
    icon: <SiHashnode size={size} />,
  },
];
