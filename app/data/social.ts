import {
  BiLinkExternal,
  BiLogoCodepen,
  BiLogoDribbble,
  BiLogoGithub,
  BiLogoGitlab,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoStackOverflow,
  BiLogoSteam,
  BiLogoUnsplash,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaFreeCodeCamp, FaProductHunt } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { FaHashnode, FaHashtag, FaSquareXTwitter,  } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/BenedictaUche",
    icon: BiLogoGithub,
    status: "social",
  },
  {
    id: 2,
    name: "X",
    url: "https://twitter.com/Benny_dicta1",
    icon: FaSquareXTwitter,
    status: "social",
  },
  {
    id: 3,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/benedictaonyebuchi",
    icon: BiLogoLinkedinSquare,
    status: "social",
  },
  {
    id: 4,
    name: "FreeCodeCamp",
    url: "https://freecodecamp.org/news/author/benedictaonyebuchi/",
    icon: FaFreeCodeCamp,
    status: "publication",
  },
  {
    id: 5,
    name: "Hashnode",
    url: "https://hashnode.com/@Benedicta",
    icon: FaHashnode,
    status: "publication",
  },
  {
    id: 6,
    name: "Substack",
    url: "https://open.substack.com/pub/ambivertjournal?utm_source=share&utm_medium=android&r=o56uf",
    icon: SiSubstack,
    status: "social",
  }


];
