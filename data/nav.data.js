import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";

export const navLinks = [
  {
    displayName: "works",
    route: "/works",
  },
  {
    displayName: "about",
    route: "/about",
  },
  {
    displayName: "stories",
    route: "/stories",
  },
  {
    displayName: "stacks",
    route: "/stacks",
  },
  {
    displayName: "links",
    route: "/links",
  },
];

const iconSize = 20;

export const navSocial = [
  {
    icon: <LuLinkedin size={iconSize} />,
    link: "https://www.linkedin.com/in/nanthakumaran-s/",
  },
  {
    icon: <LuGithub size={iconSize} />,
    link: "https://github.com/nanthakumaran-s",
  },
  {
    icon: <LuTwitter size={iconSize} />,
    link: "https://twitter.com/nanthakumaran_",
  },
];
