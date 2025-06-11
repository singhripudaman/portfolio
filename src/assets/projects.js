const projects = [
  {
    name: 'Marvel Rivals Discord Bot',
    description:
      'A Discord bot using OpenAI API to generate humorous, stat-based roasts for players on their performance in Marvel Rivals. Features automated CI/CD deployment via Docker and GitHub Actions to AWS EC2.',
    technologies: [
      'Python',
      'discord.py',
      'OpenAI API',
      'AWS EC2',
      'Github Actions',
      'Docker',
      'SQL',
    ],
    image: '/marvel_rivals_bot.png',
    links: {
      github: 'https://github.com/singhripudaman/marvel_rivals_discord_bot',
      demo: '',
    },
  },
  {
    name: 'Honours Thesis Project',
    description:
      'A framework for collecting and visualizing eye-tracking data for medical image analysis. Features automated loading of DICOM images and ROIs in 3D Slicer with heatmap visualization of spatial data.',
    technologies: ['Python', 'matplotlib', 'opencv', '3D Slicer', 'tobii'],
    image: '/honours_thesis.jpg',
    links: {
      github: '',
      demo: '',
    },
  },
  {
    name: 'Bubblegum Bloodbath',
    description:
      'An award-winning C++ game developed from scratch using SFML, winning Best Overall in the batch.',
    technologies: ['C++', 'SFML', 'ImGUI'],
    image: '/bubblegum_bloodbath.png',
    links: {
      github: '',
      demo: 'https://www.youtube.com/watch?v=APVTMvT-CXE',
    },
  },
  {
    name: 'MediSync AI',
    description:
      'A hackathon-winning healthcare professional aide that enables complex CRUD operations using natural language, eliminating the need for technical experience. Won Best Overall at the DO.IT Hackathon.',
    technologies: ['ExpressJS', 'Flask', 'MongoDB', 'OpenAI API', 'React', 'RAG'],
    image: '/medisync.png',
    links: {
      github: '',
      demo: 'https://www.youtube.com/watch?v=0E2VGkUw9dQ',
    },
  },
  {
    name: 'Maze Escape',
    description:
      'A ThreeJS game featuring complex movement behaviors like Wander, Seek and Flow Field Pathfinding. Includes dynamically generated mazes using Depth-First Backtracking Maze Generation.',
    technologies: ['ThreeJS', 'JavaScript'],
    image: '/maze_escape.png',
    links: {
      github: 'https://github.com/singhripudaman/three-js-game',
      demo: 'https://policemazegame.netlify.app',
    },
  },
  {
    name: 'Course Selection Website',
    description:
      'A comprehensive course selection platform with authentication middleware, secure password hashing using bcrypt, and automated Mocha unit tests for REST API and database operations.',
    technologies: ['ExpressJS', 'MongoDB', 'EJS', 'Mocha', 'Tailwind'],
    image: '/course_selection.png',
    links: {
      github: 'https://github.com/MUN-COMP3100/self-service',
      demo: 'https://www.youtube.com/watch?v=jmOUzrdpF6I',
    },
  },
  {
    name: 'Dining Hall Mobile App',
    description:
      'A collaborative mobile app for residence dining hall, providing daily menu previews and personalized meal favorite notifications.',
    technologies: ['React-Native', 'Firebase'],
    image: '/mun_campus_dish.png',
    links: {
      github: 'https://github.com/Curtis-Idiots/MunCampusDish-App',
      demo: '',
    },
  },
  {
    name: 'Portfolio Website',
    description: 'A responsive personal portfolio website built with Vue.js and Tailwind CSS',
    technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
    image: '/portfolio.png',
    links: {
      github: 'https://github.com/singhripudaman/portfolio',
      demo: 'https://ripu.dev',
    },
  },
  {
    name: 'Car Rental Full Stack',
    description:
      'A full-stack car rental application with user authentication, vehicle management, and booking system',
    technologies: ['TypeScript', 'React', 'Chakra UI', 'Node.js', 'Express', 'MySQL'],
    image: '/car_rental.png',
    links: {
      github: 'https://github.com/hamoodev/comp4754',
      demo: '',
    },
  },
]

export default projects
