//  icons
import { FiYoutube, FiTwitter, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

// skills images
import SkillImg1 from "./assets/img/skills/html.png";
import SkillImg2 from "./assets/img/skills/javascript.png";
import SkillImg3 from "./assets/img/skills/typescript.png";
import SkillImg4 from "./assets/img/skills/react.png";
import SkillImg5 from "./assets/img/skills/java.png";
import SkillImg6 from "./assets/img/skills/sql.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: "https://www.youtube.com/channel/UCJlKbVfZry7LJoh0FKtSbHA",
    color: "text-red-500",
    colorHover: "hover:text-red-900",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/jesus_rosarioav/?igshid=MmIzYWVlNDQ5Yg%3D%3D",
    color: "text-pink-500",
    colorHover: "hover:text-purple-900",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/jar285",
    color: "text-white",
    colorHover: "hover:text-gray-500",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/jesus-a-912508255/",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
];

export const sections = [
  {
    title: "YouTube Content Creator for Web Development",
    content:
      "I create videos on YouTube about web development topics such as HTML, CSS, JavaScript, React, and TypeScript.",
  },
  {
    title: "Backend Developer",
    content:
      "I have experience developing backends using Express, Node.js, Java Spring, and SQL databases such as MySQL and PostgreSQL.",
  },
  {
    title: "Frontend Developer",
    content:
      "I am proficient in HTML, CSS, JavaScript, React, and TypeScript and have experience developing responsive and user-friendly web applications.",
  },
];