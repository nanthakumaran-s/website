import primoNotes from "../public/works/Primo Notes.png";
import resize from "../public/works/Resize.png";
import argon from "../public/works/Argon.png";
import sortingVis from "../public/works/Sorting Visualizer.png";
import pathFindingVis from "../public/works/Path Finding Visualizer.png";
import theOwNews from "../public/works/TheOwNews.png";
import skillForge from "../public/works/Skillforge.png";
import twitterBot from "../public/works/Twitter Bot.png";
import tweetCLI from "../public/works/Tweet CLI.png";
import cloudOpsMate from "../public/works/CloudOpsMate.png";
import etlPipeline from "../public/works/Etl Pipeline.png";
import expenseMate from "../public/works/ExpenseMate.png";

export const works = [
  {
    id: "12",
    name: "ExpenseMate",
    description:
      "A simple expense tracker application with budgets and invoices",
    stacks: ["React Js", "C#", "SQL Server"],
    live: "",
    github: "https://github.com/nanthakumaran-s/ExpenseMate",
    detail: "",
    img: expenseMate,
  },
  {
    id: "11",
    name: "ETL Pipeline",
    description: "ETL Pipeline to analysis sentiment from Tweets and News",
    stacks: ["Python", "Kafka", "AWS", "ELK Stack"],
    live: "https://drive.google.com/file/d/1cx93UhIAicLN9uKmINEcDUvdAS0tpotb/view",
    github: "https://github.com/nanthakumaran-s/ETL-Pipeline",
    detail: "",
    img: etlPipeline,
  },
  {
    id: "10",
    name: "CloudOpsMate",
    description: "Centralized approach for managing multi-cloud infrastructure",
    stacks: ["React Js", "Node Js", "MongoDB"],
    live: "",
    github: "",
    detail: "",
    img: cloudOpsMate,
  },
  {
    id: "09",
    name: "Tweet CLI",
    description: "Tweet directly from your CLI",
    stacks: ["Node Js"],
    live: "https://www.npmjs.com/package/tweet-cli-node",
    github: "https://github.com/nanthakumaran-s/Tweet-CLI",
    detail: "",
    img: tweetCLI,
  },
  {
    id: "08",
    name: "Twitter Bot",
    description:
      "A Simple twitter bot powered by OpenAI's Davinci Model to generate tweets and tweet them",
    stacks: ["Node Js", "Open AI"],
    live: "",
    github: "https://github.com/nanthakumaran-s/twitterBot",
    detail: "",
    img: twitterBot,
  },
  {
    id: "07",
    name: "SkillForge",
    description: "A platform to share ideas, get investment and get mentoring",
    stacks: ["Flutter", "Nest Js", "MongoDB"],
    live: "",
    github: "",
    detail: "",
    img: skillForge,
  },
  {
    id: "06",
    name: "TheOwNews",
    description:
      "A community driven News app where the news is shared, moderated and consumed by the community",
    stacks: ["Flutter", "Node Js", "MongoDB"],
    live: "",
    github: "",
    detail: "",
    img: theOwNews,
  },
  {
    id: "05",
    name: "Path Finding Visualizer",
    description:
      "A Path Finding Visualizer made of React Js and have cool algorithms which is used in path finding",
    stacks: ["React Js"],
    live: "https://path.nanthakumaran.com",
    github: "",
    detail: "",
    img: pathFindingVis,
  },
  {
    id: "04",
    name: "Sorting Visualizer",
    description:
      "A Sorting Visualizer made of React Js which includes 5 sorting algorithms",
    stacks: ["React Js"],
    live: "https://sort.nanthakumaran.com",
    github: "https://github.com/nanthakumaran-s/sorting-visualizer",
    detail: "",
    img: sortingVis,
  },
  {
    id: "03",
    name: "Argon LMS",
    description:
      "A Learning Management System along with a CMS website for the sake of students and faculties",
    stacks: ["Flutter", "Firebase"],
    live: "",
    github: "",
    detail: "",
    img: argon,
  },
  {
    id: "02",
    name: "Resize",
    description: "A Simple Responsive Design Approach for your Flutter Apps",
    stacks: ["Flutter"],
    live: "https://pub.dev/packages/resize",
    github: "https://github.com/nanthakumaran-s/resize",
    deatil: "",
    img: resize,
  },
  {
    id: "01",
    name: "PrimoNotes",
    description: "A simple note taking app made with Kotlin",
    stacks: ["Kotlin", "SQLite"],
    live: "",
    github: "https://github.com/nanthakumaran-s/PrimoNotes",
    detail: "",
    img: primoNotes,
  },
];

export const featured = [0, 1, 2, 5, 7, 8];
