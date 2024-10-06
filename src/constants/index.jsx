import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
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
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoGmail, BiLogoJavascript } from "react-icons/bi";

import { VscVscode } from "react-icons/vsc";
import { FcSmartphoneTablet } from "react-icons/fc";
import { BsDatabaseFillGear } from "react-icons/bs";
import { TbBinaryTree } from "react-icons/tb";

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
