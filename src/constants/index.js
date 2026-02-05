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
  {
    id: 4,
    title: "Co Working Space",
    description:
      "A web application for a co working space to manage their clients and their bookings.",
    subDescription: [
      "Built the backend with Node.js and MongoDB for data modeling and storage of clients and bookings.",
      "Implemented real-time updates for bookings and availability using sockets.",
      "Developed the frontend with React and Tailwind CSS for a seamless user experience.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.png",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/logos/postgres.svg",
      },
    ],
  },
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
        name: "WordPress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
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
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
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
