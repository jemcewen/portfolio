const projects = [
  {
    number: 1,
    title: 'Rate My Campus',
    intro:
      'A full-stack application that enables students to rate and provide feedback on university campuses',
    website: 'https://rate-my-campus.vercel.app/',
    github: 'https://github.com/jemcewen/rate-my-campus-react',
    images: [
      'https://res.cloudinary.com/dyyktpise/image/upload/v1677633817/Portfolio/rate-my-campus-1_ji77yo.png',
      'https://res.cloudinary.com/dyyktpise/image/upload/v1677633817/Portfolio/rate-my-campus-2_z5pksv.png',
    ],
    description: [
      'The main goal of this project is to assist high school students in the challenging process of choosing a post-secondary institution to attend.',
      'The application offers a user-friendly interface for browsing and reviewing various campuses, with registered users being able to contribute their own reviews, or add a new campus to the platform.',
      'To enhance user security, this project includes authentication with JSON Web Tokens. In addition, image upload and storage are facilitated using Cloudinary, while MapBox is employed for geocoding and mapping.',
    ],
    technology:
      'The frontend was created using React and Redux Toolkit, while the backend RESTful API was developed using Node.js and Express.js. All of the data is stored in a MongoDB database.',
    icons: [
      {
        name: 'react',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'nodejs',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'express',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'mongodb',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
    ],
  },
  {
    number: 2,
    title: 'Past Drafts',
    intro:
      'A frontend react application for users to easily search for NFL players and access their draft statistics.',
    website: 'https://past-drafts.vercel.app/',
    github: 'https://github.com/jemcewen/drafted-before',
    images: [
      'https://res.cloudinary.com/dyyktpise/image/upload/v1677633817/Portfolio/past-drafts-1_qjvwgd.png',
      'https://res.cloudinary.com/dyyktpise/image/upload/v1677633818/Portfolio/past-drafts-2_avbyqk.png',
    ],
    description: [
      'This project provides sports fans an opportunity to review the history of the NFL entry draft and evaluate which teams were successful and which ones were not.',
      'This application allows users to search for NFL players and view how their draft played out. Additionally, users can filter the draft list by position to explore alternative options that could have been selected.',
      'The data used in this project is obtained from a third-party ESPN API, which provides an extensive collection of data on various sports, including the NFL.',
    ],
    technology:
      'The project was constructed using several react hooks such as useContext and useReducer. Tailwind CSS was utilized for styling, and Vercel was the chosen platform for deployment.',
    icons: [
      {
        name: 'react',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'tailwind',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      },
      {
        name: 'vercel',
        url: 'https://res.cloudinary.com/dyyktpise/image/upload/v1677633817/Portfolio/vercel_wqxlk2.svg',
      },
    ],
  },
];

export default projects;
