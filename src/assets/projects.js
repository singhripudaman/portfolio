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
    image: 'https://placehold.co/300x200/333/white/png',
    links: {
      github: 'https://github.com/yourusername/marvel-rivals-bot',
      demo: 'https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=0&scope=bot',
    },
  },
  {
    name: 'Honours Thesis Project',
    description:
      'A framework for collecting and visualizing eye-tracking data for medical image analysis. Features automated loading of DICOM images and ROIs in 3D Slicer with heatmap visualization of spatial data.',
    technologies: ['Python', 'matplotlib', 'opencv', '3D Slicer', 'tobii'],
    image: 'https://placehold.co/300x200/333/white/png',
    links: {
      github: 'https://github.com/yourusername/honours-thesis',
    },
  },
  {
    name: 'Bubblegum Bloodbath',
    description:
      'An award-winning C++ game developed from scratch using SFML, winning Best Overall in the batch.',
    technologies: ['C++', 'SFML', 'ImGUI'],
    image: 'https://placehold.co/300x200/333/white/png',
    links: {
      github: 'https://github.com/yourusername/bubblegum-bloodbath',
      demo: 'https://yourusername.itch.io/bubblegum-bloodbath',
    },
  },
  {
    name: 'MediSync AI',
    description:
      'A hackathon-winning healthcare professional aide that enables complex CRUD operations using natural language, eliminating the need for technical experience. Won Best Overall at the DO.IT Hackathon.',
    technologies: ['ExpressJS', 'Flask', 'MongoDB', 'OpenAI API', 'React', 'RAG'],
    image: 'https://placehold.co/300x200/333/white/png',
    links: {
      github: 'https://github.com/yourusername/medisync-ai',
      demo: 'https://medisync-ai.vercel.app',
    },
  },
  {
    name: 'Maze Escape',
    description:
      'A ThreeJS game featuring complex movement behaviors like Wander, Seek and Flow Field Pathfinding. Includes dynamically generated mazes using Depth-First Backtracking Maze Generation.',
    technologies: ['ThreeJS', 'JavaScript'],
    image: 'https://placehold.co/300x200/333/white/png',
    links: {
      github: 'https://github.com/yourusername/maze-escape',
      demo: 'https://maze-escape.vercel.app',
    },
  },
  {
    name: 'Course Selection Website',
    description:
      'A comprehensive course selection platform with authentication middleware, secure password hashing using bcrypt, and automated Mocha unit tests for REST API and database operations.',
    technologies: ['ExpressJS', 'MongoDB', 'EJS', 'Mocha', 'Tailwind'],
    image: 'https://placehold.co/300x200/333/white/png',
    links: {
      github: 'https://github.com/yourusername/course-selection',
    },
  },
  {
    name: 'Dining Hall Mobile App',
    description:
      'A collaborative mobile app for residence dining hall, providing daily menu previews and personalized meal favorite notifications.',
    technologies: ['React-Native', 'Firebase'],
    image: 'https://placehold.co/300x200/333/white/png',
    links: {
      github: 'https://github.com/yourusername/dining-hall-app',
      demo: 'https://play.google.com/store/apps/details?id=com.dininghall',
    },
  },
]

export default projects
