export const myProjects = [
  {
    id: 1,
    title: "The Dockies",
    description:
      "A social platform where users can upload videos, like, and comment on content.",
    subDescription: [
      "Built the backend with Mongoose and MongoDB for data modeling and storage of users, videos, likes, and comments.",
      "Implemented real-time comments using WebSockets so users see new comments instantly.",
      "Supported video uploads, likes, and a comment system as core platform features.",
    ],
    href: "https://www.thedockies.com/",
    logo: "",
    image: "/assets/projects/social-platform.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "Mongoose",
        path: "/assets/logos/mongoose.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Elevated Iron",
    description:
      "A Web Application and mobile app for a fitness company to manage their clients and their subscriptions.",
    subDescription: [
      "Developed the backend with TypeScript using Mongoose and Prisma for data modeling and database operations.",
      "Integrated payment method APIs for subscription and billing management.",
      "Implemented push notifications using Firebase Cloud Messaging.",
      "Built API layer for client and subscription management used by the web and mobile apps.",
    ],
    href: "https://gym.elevatedironguide.com/",
    logo: "",
    image: "/assets/projects/elevated.png",
    tags: [
      {
        id: 1,
        name: "Prisma",
        path: "/assets/logos/prisma.svg",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/logos/typescript.png",
      },
    ],
  },
  {
    id: 3,
    title: "Ausplan Adviser Solutions",
    description:
      "A web application for a financial planning company to manage their clients and their financial plans.",
    subDescription: [
      "Developed the backend with TypeScript using Mongoose and Prisma for data modeling and database operations.",
      "Built API layer for client and financial plan management used by the web application.",
    ],
    href: "https://ausplan.com.au/",
    logo: "",
    image: "/assets/projects/ausplan.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/nodejs.png",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript.png",
      },
      {
        id: 4,
        name: "Mongoose",
        path: "/assets/logos/mongoose.svg",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Co Working Space",
  //   description:
  //     "A web application for a co working space to manage their clients and their bookings.",
  //   subDescription: [
  //     "Built the backend with Node.js and MongoDB for data modeling and storage of clients and bookings.",
  //     "Implemented real-time updates for bookings and availability using sockets.",
  //     "Developed the frontend with React and Tailwind CSS for a seamless user experience.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/game-engine.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React",
  //       path: "/assets/logos/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "/assets/logos/tailwindcss.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Node.js",
  //       path: "/assets/logos/nodejs.png",
  //     },
  //     {
  //       id: 4,
  //       name: "PostgreSQL",
  //       path: "/assets/logos/postgres.svg",
  //     },
  //   ],
  // },
  {
    id: 5,
    title: "Aylormade CRM",
    description:
      "A web application for a fashion company to manage their clients and their orders.",
    subDescription: [
      "Developed the backend with Node.js and MongoDB for data modeling and storage of clients and orders.",
      "Built API layer for client and order management used by the web application.",
    ],
    href: "https://aylormade-crm.com/",
    logo: "",
    image: "/assets/projects/crm.png",
    tags: [
      {
        id: 1,
        name: "Redis",
        path: "/assets/logos/redis.svg",
      },
      {
        id: 2,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.png",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/logos/typescript.png",
      },
    ],
  },
  {
    id: 6,
    title: "GMCI Pakistan",
    description:
      "A web application for a government organization to manage their clients and their courses.",
    subDescription: [
      "Built the backend with Node.js and MongoDB for data modeling and storage of clients and courses.",
      "Built the frontend with React and Tailwind CSS for a seamless user experience.",
      "Intergrate the WhatsApp API for communication with clients.",
    ],
    href: "https://admin.gmcipakistan.org/",
    logo: "",
    image: "/assets/projects/gmci.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/nodejs.png",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript.png",
      },
      {
        id: 4,
        name: "Mongoose",
        path: "/assets/logos/mongoose.svg",
      },
      {
        id: 5,
        name: "WhatsApp API",
        path: "/assets/logos/whatsapp.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Backend Developer",
    job: "Developer at Pixarsart Studios",
    date: "June 2024 - April 2025",
    contents: [
      "Developed the backend with TypeScript using Node.js and MongoDB for data modeling and database operations.",
      "Built API layer for client and subscription management used by the web and mobile apps.",
      "Integrated payment method APIs for subscription and billing management.",
    ],
  },
  {
    title: "Full Stack Developer",
    job: "Developer at Devline Solutions",
    date: "May 2025 - Present",
    contents: [
      "Developed the backend with TypeScript using Node.js and MongoDB for data modeling and database operations.",
      "Built API layer for client and subscription management used by the web and mobile apps.",
      "Integrated payment method APIs for subscription and billing management.",
      "Built the frontend with React and Tailwind CSS for a seamless user experience.",
      "Implemented real-time updates for bookings and availability using sockets.",
      "Developed the frontend with React and Tailwind CSS for a seamless user experience.",
      "Implemented real-time updates for bookings and availability using sockets.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
