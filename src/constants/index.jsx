import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaBrain,
  FaComments,
  FaUserClock,
  FaDiscord,
} from "react-icons/fa6";

import { RiTailwindCssFill } from "react-icons/ri";

import {
  SiAxios,
  SiExpress,
  SiGit,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";
import { DiMysql, DiScrum } from "react-icons/di";
import {
  FaBookReader,
  FaNodeJs,
  FaSyncAlt,
  FaTasks,
  FaUsersCog,
} from "react-icons/fa";
import { BiLogoGmail, BiLogoJavascript } from "react-icons/bi";

import { VscVscode } from "react-icons/vsc";
import { FcSmartphoneTablet } from "react-icons/fc";
import { BsDatabaseFillGear, BsFillMusicPlayerFill } from "react-icons/bs";
import { GiBookCover, GiMeditation, GiPuzzle } from "react-icons/gi";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { CgGym } from "react-icons/cg";
import { TbBinaryTree } from "react-icons/tb";
import AuthMaster from "../components/modal/AuthMaster";
import UserGen from "../components/modal/UserGen";
import PizzaKitchen from "../components/modal/PizzaKitchen";
import DSALearn from "../components/modal/DSALearn";

import imgAuthmaster from "../assets/authmaster.jpg";
import imgUserGen from "../assets/usergen.jpg";
import imgPizza from "../assets/juniorspizza.jpg";
import imgDSA from "../assets/dsaApp.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/JusmeJr93",
    icon: <FaGithub fontSize={25} className="hover:opacity-80 " />,
    title: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/jusmejr93/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    title: "LinkedIn",
  },
  {
    href: "mailto:junior.jusme@gmail.com",
    icon: <BiLogoGmail fontSize={25} className="hover:opacity-80" />,
    title: "Gmail",
  },
  {
    href: "https://discord.com/users/1196598049733091372",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
    title: "Discord",
  },
];

export const TECHNICAL_SKILLS = [
  {
    name: "Visual Studio Code",
    icon: <VscVscode className="text-4xl text-blue-500" />,
  },
  { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-600" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-4xl text-yellow-400" />,
  },
  { name: "React", icon: <FaReact className="text-4xl text-blue-400" /> },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-4xl text-indigo-700" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-4xl text-blue-400" />,
  },
  {
    name: "Styled-components",
    icon: <SiStyledcomponents className="text-4xl text-amber-600" />,
  },
  { name: "NodeJs", icon: <FaNodeJs className="text-4xl text-green-700" /> },
  {
    name: "ExpressJS",
    icon: <SiExpress className="text-4xl text-slate-400" />,
  },
  { name: "Axios", icon: <SiAxios className="text-4xl text-indigo-700" /> },
  {
    name: "React Router",
    icon: <SiReactrouter className="text-4xl text-red-500" />,
  },
  { name: "Git", icon: <SiGit className="text-4xl text-orange-700" /> },
  {
    name: "REST APIs",
    icon: <BsDatabaseFillGear className="text-4xl text-blue-100" />,
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-4xl text-indigo-500" />,
  },
  {
    name: "MySQL",
    icon: <DiMysql className="text-4xl text-blue-400" />,
  },
  {
    name: "Responsive Web Design",
    icon: <FcSmartphoneTablet className="text-4xl" />,
  },
  {
    name: "Data Structures and Algorithms",
    icon: <TbBinaryTree className="text-4xl" />,
  },
];

export const SOFT_SKILLS = [
  {
    name: "Agile methodologies",
    icon: <DiScrum className="text-4xl text-blue-700" />,
  },
  {
    name: "Problem-solving",
    icon: <GiPuzzle className="text-4xl text-yellow-500" />,
  },
  {
    name: "Critical thinking",
    icon: <FaBrain className="text-4xl text-red-300" />,
  },
  {
    name: "Fast Learner",
    icon: <FaBookReader className="text-4xl text-blue-200" />,
  },
  {
    name: "Teamwork and collaboration",
    icon: <FaUsersCog className="text-4xl text-gray-400" />,
  },
  {
    name: "Communication",
    icon: <FaComments className="text-4xl text-blue-400" />,
  },
  {
    name: "Adaptability",
    icon: <FaSyncAlt className="text-4xl text-green-200" />,
  },
  { name: "Project management", icon: <FaTasks className="text-4xl" /> },
  {
    name: "Time management",
    icon: <FaUserClock className="text-4xl text-blue-200" />,
  },
  {
    name: "Attention to detail",
    icon: <LiaSearchPlusSolid className="text-4xl text-blue-600" />,
  },
];

export const PROJECTS = [
  {
    title: "AuthMaster",
    subtitle: "Full-stack user management system...",
    thumbnail: imgAuthmaster,
    previewLink: "https://authmaster-user-management.vercel.app/",
    repoLink: "https://github.com/JusmeJr93/user-management-app",
    details: <AuthMaster />,
  },
  {
    title: "UserGen Pro",
    subtitle: "Full-stack app to generate random data...",
    thumbnail: imgUserGen,
    previewLink: "https://user-gen-pro.vercel.app/",
    repoLink: "https://github.com/JusmeJr93/random-user-data-generator",
    details: <UserGen />,
  },
  {
    title: "Junior's Pizza Kitchen",
    subtitle: "Responsive pizza ordering web app...",
    thumbnail: imgPizza,
    previewLink: "https://juniors-pizza-kitchen.vercel.app/",
    repoLink: "https://github.com/JusmeJr93/juniors-pizza-kitchen",
    details: <PizzaKitchen />,
  },
  {
    title: "DSA Learning App",
    subtitle: "React App to learn and practice DSA...",
    thumbnail: imgDSA,
    previewLink: "https://dsa-learning-with-js.vercel.app/",
    repoLink: "https://github.com/JusmeJr93/dsa-learning-with-js",
    details: <DSALearn />,
  },
];

export const HOBBIES = [
  {
    title: "Active Lifestyle",
    description:
      "My commitment to a healthy and active lifestyle is reflected in my daily routine. I combine strength training with outdoor activities and sports such as basketball and boxing. It has built my physical and mental endurance, essential for overcoming work challenges.",
    icon: <CgGym className="text-4xl " />,
  },
  {
    title: "Reading",
    description:
      "Reading is a passion that nourishes my mind and allows me to explore diverse perspectives. Through books on programming and personal development, I have gained valuable knowledge that I apply in my daily work.",
    icon: <GiBookCover className="text-6xl" />,
  },
  {
    title: "Podcasts and music",
    description:
      "Podcasts and music are a constant source of inspiration. Listening to different podcasts about technology and entrepreneurship and music genres helps me to stay up-to-date and develop my critical thinking.",
    icon: <BsFillMusicPlayerFill className="text-6xl " />,
  },
  {
    title: "Meditation and mindfulness",
    description:
      "Meditation and mindfulness are a fundamental part of my daily routine. These practices allow me to manage stress, improve my concentration and make better decisions.",
    icon: <GiMeditation className="text-6xl " />,
  },
];
