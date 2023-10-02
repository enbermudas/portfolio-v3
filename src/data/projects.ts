type ProjectType = "web" | "library";

export interface IProject {
  id: number;
  type: ProjectType;
  title: string;
  link: string;
  description: string;
  tags: string[];
  features: {
    core: string[];
    styles?: string[];
    libraries?: string[];
    others?: string[];
  };
}

const projects: IProject[] = [
  {
    id: 1,
    type: "library",
    title: "Supasut",
    link: "https://github.com/enbermudas/supasut",
    description:
      "Lightweight utility library designed to streamline your code and make it more elegant.",
    tags: ["Node", "Typescript"],
    features: {
      core: ["Node", "Typescript"],
      libraries: ["Jest", "Rollup"],
      others: ["Circle CI"],
    },
  },
  {
    id: 2,
    type: "web",
    title: "Vite react-ts",
    link: "https://github.com/enbermudas/vite-react-ts",
    description:
      "Minimal vite-based starter template for building React applications with TypeScript.",
    tags: ["React", "Typescript", "TailwindCSS"],
    features: {
      core: ["Vite", "React", "Typescript"],
      styles: ["TailwindCSS", "DaisyUI"],
      libraries: ["ESlint", "Prettier", "Husky", "Vitest"],
    },
  },
  {
    id: 3,
    type: "web",
    title: "Guess Me",
    link: "https://enbermudas.github.io/guessme/",
    description:
      "Small guessing game created to test firebase integration in a React project.",
    tags: ["React", "Firebase", "ChakraUI"],
    features: {
      core: ["Create React App", "React", "Javascript"],
      styles: ["ChakraUI"],
      libraries: ["Firebase"],
    },
  },
  {
    id: 4,
    type: "library",
    title: "Fail Express",
    link: "https://github.com/enbermudas/fail-express/",
    description:
      "An express error-handler middleware for JSON APIs. This library uses http-status.",
    tags: ["Express", "Node", "Javascript"],
    features: {
      core: ["Node"],
      libraries: ["http-errors"],
    },
  },
];

export default projects;
