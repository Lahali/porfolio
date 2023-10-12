import { rainbow, dropon, budget, films } from "./public/assets/images"

const projects = [
  {
    id: 1,
    title: "Where Was Filmed",
    description: "An app where the user can see and add movie locations",
    technologies: "React, Tailwind, Leaflet and Firebase",
    link: "https://movielocations.vercel.app/",
    img: films,
  },

  // {
  //   id: 2,
  //   title: "Knit Journal",
  //   description: "An app where the user can add handcraft projects",
  //   technologies: "React, Tailwind and Firebase",
  //   link: "https://knittingjournal.vercel.app/",
  //   img:
  // },

  {
    id: 3,
    title: "Budget app",
    description: "An app to create budgets for web services",
    technologies: "React, Styled Components",
    link: "https://budget-app-ivory.vercel.app/",
    img: budget,
  },

  {
    id: 4,
    title: "Drop Zone",
    description: "A drop-on app",
    technologies: "ES6, CSS and HTML",
    link: "https://drop-zone-halimeh.vercel.app/",
    img: dropon,
  },
  {
    id: 5,
    title: "Rainbow to-do",
    description: "A To-Do app that creates a rainbow.",
    technologies: "React, Styled Components",
    link: "https://rainbow-todo.vercel.app/",
    img: rainbow,
  },
]

export default projects
