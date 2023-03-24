import { rainbow, dropon, budget } from "./public/assets/images"

const projects = [
  {
    id: 1,
    title: "Budget app",
    description: "An app to create budgets for web services",
    technologies: "React, Styled Components",
    link: "https://budget-app-ivory.vercel.app/",
    img: budget,
  },
  {
    id: 2,
    title: "Drop Zone",
    description: "A drop-on app",
    technologies: "ES6, CSS and HTML",
    link: "https://drop-zone-halimeh.vercel.app/",
    img: dropon,
  },
  {
    id: 3,
    title: "Rainbow to-do",
    description: "A To-Do app that creates a rainbow.",
    technologies: "React, Styled Components",
    link: "https://rainbow-todo.vercel.app/",
    img: rainbow,
  },
]

export default projects
