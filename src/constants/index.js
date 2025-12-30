import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  nebsciencehub,
  physicslaunchpad,
  extension,
  SSIRC,
  Shanti,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Robotics Mentor",
    company_name: "Shree Shanti Namuna Secondary School | Shanti Science, ICT and Robotics Club",
    icon: SSIRC,
    iconBg: "#161329",
    date: "Sep 2025 - Oct 2025",
    points: [
      "Led robotics mentorship program, teaching students the fundamentals of robotics, including mechanical design, electronics, and programming.",
      "Guided students in building and programming robots using Arduino and Raspberry Pi platforms, fostering hands-on learning and creativity.",
    ],
  },
  {
    title: "Web development Mentor",
    company_name: "Shree Shanti Namuna Secondary School | Shanti Science, ICT and Robotics Club",
    icon: Shanti,
    iconBg: "#161329",
    date: "Nov 2025 - Dec 2025",
    points: [
      "Conducted web development workshops, introducing students to HTML, CSS, and JavaScript to build interactive websites.",
      "Assisted students in creating their own web projects, enhancing their coding skills and understanding of web technologies.",
      "Promoted best practices in web design and development, encouraging students to create user-friendly and visually appealing websites.",
    ],
  },
  {
    title: "Chess coach",
    company_name: "Shree Shanti Namuna Secondary School | Shanti Chess Club",
    icon: Shanti,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Organized and led chess coaching sessions for students, teaching them fundamental strategies, tactics, and rules of the game.",
      "Developed customized training plans to improve students' skills, focusing on opening principles, middle-game strategies, and endgame techniques.",
      "Encouraged critical thinking and problem-solving through chess puzzles and competitive play, fostering a love for the game among students.",
    ],
  },
];

export const projects = [
  {
    name: "Neb-Science-Hub",
    description:
      "Your one-stop resource for NEB grade 11 science notes, previous year questions, and study materials",
    tags: [
      { name: "Typescript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Notes from toppers", color: "yellow-text-gradient" },
    ],
    image: nebsciencehub,
    source_code_link: "https://github.com/PramisKunwar/neb-science-hub",
  },
  {
    name: "Physics Launchpad",
    description:
      "Physics Launchpad is an interactive, web-based Projectile Motion Virtual Lab built with TypeScript + React which allows users to simulate and visualize projectile motion experiments in a virtual environment.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Vite", color: "pink-text-gradient" },
    ],
    image: physicslaunchpad,
    source_code_link: "https://github.com/PramisKunwar/physics-launchpad",
  },
  {
    name: "Focus Nudge Extension",
    description:
      "A gentle, minimalist Chrome extension that displays context-aware motivational messages when you visit distracting websites.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: extension,
    source_code_link:
      "https://github.com/PramisKunwar/extension",
  },
];
