const CONFIG = {
  github: {
    username: 'luj00', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/luj00, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], 
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'luj00/superchat',
          '202309-EKTA-JO-FSW/capstone-room-6',
          '202309-EKTA-JO-FSW/e-commerce-project-team-8',
          'rinadaq/Sonic-Project'
        ], 
      },
    },
  },
  seo: {
    title: 'Portfolio of Lujain Mansour',
    description:
      "My name is Lujain Mansour. I graduated from the University of Petra with a major in computer science and completed a full-stack bootcamp at Re:coded, specializing in the MERN stack. As a web developer, passionate about crafting seamless user experiences and efficient systems. From responsive layouts to database optimization, dedicated to delivering solutions that exceed expectations. I thrive on innovation and problem-solving, always aiming to enhance the digital experience for users.",
    imageURL: '',
  },
  social: {
    linkedin: '',
    phone: '',
    email: 'lujainmansour22@gmail.com',
  },
  resume: {
    fileUrl: 'file:///home/lujain/Downloads/lujain%20cv%20(6)%20(4).pdf',
  },
  bio: {
    name: 'Lujain Mansour',
    description: `My name is Lujain Mansour. I graduated from the University of Petra with a major in computer science and completed a full-stack bootcamp at Re:coded, specializing in the MERN stack. As a web developer, I'm passionate about crafting seamless user experiences and efficient systems. From responsive layouts to database optimization, I'm dedicated to delivering solutions that exceed expectations. I thrive on innovation and problem-solving, always aiming to enhance the digital experience for users.`,
  },
  skills: ['JavaScript', 'React.js', 'Node.js', 'MySQL', 'Git', 'Docker', 'HTML', 'CSS'],
  educations: [
    {
      institution: 'University of Petra',
      degree: 'Bachelor of Computer Science',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Re:Coded',
      degree: 'Full-Stack Bootcamp (MERN Stack)',
      from: 'February 2023',
      to: 'March 2024',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: ['retro', 'light'],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  enablePWA: true,
};
export default CONFIG;
