import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    sql,
    html,
    css,
    reactjs,
    redux,
    laravel,
    tailwind,
    nodejs,
    mongodb,
    php,
    bootstrap,
    gsap,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "threejs",
      icon: threejs,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "laravel",
      icon: laravel,
    },
    {
      name: "mongodb",
      icon: mongodb,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: reactjs,
      iconBg: "#383E56",
      date: "REACT-JS",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "SQL",
      company_name: "sql",
      icon: sql,
      iconBg: "#E6DEDD",
      date: "SQL-MYSQL",
      points: [
        "Designing and optimizing database schemas to ensure efficient data storage and retrieval.",
        "Writing and executing SQL queries to manage and manipulate data in relational databases.",
        "Monitoring database performance and performing tuning and indexing to improve query efficiency.",
        "Ensuring data integrity and security through proper database configuration and access controls.",
      ],
    },
    {
      title: "Bootstrap and Tailwindcss",
      company_name: "Bootstrap and Tailwindcss",
      icon: tailwind,
      iconBg: "#383E56",
      date: "Bootstrap-Tailwindcss",
      points: [
        "Utilizing Bootstrap to rapidly design and prototype responsive web interfaces with a set of pre-designed components and layout utilities.",
        "Customizing Bootstrap themes and extending its functionality with custom CSS to align with project-specific branding and design requirements.",
        "Leveraging Tailwind CSS to build highly customized and responsive designs using a utility-first approach, allowing for precise control over styling and layout.",
        "Implementing Tailwind's utility classes to create adaptive and scalable UI components while maintaining a consistent design system across the application.",
      ],
    },
    {
      title: "Laravel",
      company_name: "php",
      icon: laravel,
      iconBg: "#E6DEDD",
      date: "PHP-LARAVEL",
      points: [
        "Designing and developing web applications using the Laravel PHP framework to leverage its powerful MVC architecture and built-in functionalities.",
        "Implementing RESTful APIs and integrating third-party services to enhance application capabilities and data interactions.",
        "Employing Laravel’s Blade templating engine to build dynamic and reusable front-end components and layouts.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Mainly CSS",
      name: "visit",
      designation: "CSS Animations",
      company: "Acme Co",
      image: css,
    },
    {
      testimonial:
        "Using Three JS",
      name: "visit",
      designation: "COO",
      company: "Portfolio",
      image: threejs,
    },
    {
      testimonial:
        "Using GSAP",
      name: "visit",
      designation: "Portfolio",
      company: "",
      image: gsap,
    },
  ];
  
  const projects = [
    {
      name: "Weather App",
      description:
        "Web-based platform that uses API to search for weather forecast and details.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "News Monkey APP",
      description:
        "Web application that uses an API key to provide news arround the world",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Coders Queries",
      description:
        "A thread app that works as a platform to search and explain different queries",
      tags: [
        {
          name: "Sql",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };