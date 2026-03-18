// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Meraj Haque",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://merajhaque.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern fullstack apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "merazhaque74663@gmail.com";

export const SOCIAL_LINKS = {
  github: "https://github.com/MerazMz",
  linkedin: "https://www.linkedin.com/in/meraj-haque-mz/",
  instagram: "https://www.instagram.com/meraz_mz_",
  leetcode: "https://leetcode.com/u/merazmz",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  githubUrl?: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Prolance",
    image: "/projects/prolance.png",
    blurImage: "/projects/blur/prolance.png",
    description: "A freelance marketplace built as a college project — connecting clients with student developers.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://prolance.meraz.me/",
    githubUrl: "https://github.com/MerazMz/Prolance",
    tech: ["react", "nodejs", "express", "tailwind", "mongodb"],
  },
  {
    name: "UMZ — UMS Made Zippy",
    image: "/projects/umz.png",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "A faster, cleaner take on our college's University Management System — built to make campus life less painful.",
    gradient: ["#245B57", "#004741"],
    url: "https://umz.vercel.app/",
    githubUrl: "https://github.com/MerazMz/umzV3.0",
    tech: ["react", "express", "tailwind", "nodejs"],
  },
  {
    name: "MediBot",
    image: "/projects/medibot.jpeg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "An AI-powered chatbot for basic medical queries — my first hands-on ML + web integration project.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://medibot.meraz.me",
    githubUrl: "https://github.com/MerazMz/MediBot",
    tech: ["HTML", "php", "tailwind"],
  },
  {
    name: "Student Ranking System",
    image: "/projects/ranking.png",
    blurImage: "/projects/blur/ranking.png",
    description: "A web app to rank students by academic performance — built for a college mini-project with a real use case.",
    gradient: ["#003052", "#167187"],
    url: "https://lpu-student-ranking.vercel.app/",
    githubUrl: "https://lpu-student-ranking.vercel.app",
    tech: ["tailwind", "HTML", "javascript"],
  },
  {
    name: "Synapti Games",
    image: "/projects/synapti.png",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "A smart study assistant chatbot — helps students find resources and summarize notes using NLP.",
    gradient: ["#003052", "#167187"],
    url: "https://memory-game-bot.vercel.app/",
    githubUrl: "https://github.com/MerazMz/memory_game_bot",
    tech: ["tailwind", "html", "javascript"],
  }
];

export const SKILLS = {
  frontend: [
    "javascript",
    "typescript",
    "react",
    "next",
    "html",
    "css",
    "tailwind",
  ],
  backend: [
    "nodejs",
    "python",
    "mongodb",
    "mysql",
    "php"
  ],
  devops: [
    "docker",
    "git",
    "github",
  ],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2026",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Leetcode 450 Questions Solved",
    size: ItemSize.SMALL,
    subtitle:
      "Solved 450+ questions on LeetCode covering various topics including arrays, strings, dynamic programming, and more.",
    image: "/social/leetcode.svg",
    slideImage: "/timeline/questtionslc.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Innotek LPU's Annual Tech Fest",
    size: ItemSize.SMALL,
    subtitle: "Showcased MediBot - AI-powered healcare portal for basic medical queries at LPU's Annual Tech Fest,",
    image: "/timeline/lpulogo.png",
    slideImage: "/timeline/innotek.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Summer PEP - DSA Training",
    size: ItemSize.SMALL,
    subtitle:
      "Intensive DSA training program focusing on data structures and algorithms to enhance problem-solving skills.",
    image: "/timeline/bytexl.png",
    slideImage: "/timeline/bytexlcert.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "LPU Hackathon",
    size: ItemSize.SMALL,
    subtitle: "Developed a web app to rank students by academic performance — built for a college mini-project with a real use case.",
    image: "/timeline/lpulogo.png",
    slideImage: "/timeline/lpuhack.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Advitiya - IIT Ropar",
    size: ItemSize.SMALL,
    subtitle:
      "Participated in Robowars at IIT Ropar's Annual Tech Fest, Advitiya, showcasing our team's robotics skills.",
    image: "/timeline/iitropar.png",
    slideImage: "/timeline/advityaiitr.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "MERN Stack",
    size: ItemSize.SMALL,
    subtitle:
      "Completed a MERN Stack course and built a web app to gaming bot — built for a college mini-project with a real use case.",
    image: "/timeline/cipher.jpeg",
    slideImage: "/timeline/ciphercert.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "KRITRIMA 1.0",
    size: ItemSize.SMALL,
    subtitle:
      " The event featured thrilling drone simulations and an adrenaline-fueled robosoccer showdown, fostering awareness and enthusiasm for robotics. ",
    image: "/timeline/rtra.png",
    slideImage: "/timeline/Kritima.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "3d Modeling Workshop",
    size: ItemSize.SMALL,
    subtitle:
      "A hands-on workshop on 3D modeling using Fusion360, where participants learned to create 3D models of objects and characters.",
    image: "/timeline/resolutelabs.png",
    slideImage: "/timeline/3axisarm.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Joined LPU",
    size: ItemSize.SMALL,
    subtitle:
      "Started my journey in LPU, where I learnt the fundamentals of Computer Science and Engineering.",
    image: "/timeline/lpulogo.png",
    slideImage: "/timeline/lpuphoto.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
