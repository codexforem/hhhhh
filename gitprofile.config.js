// gitprofile.config.js

const config = {
  github: {
    username: 'swadhinbiswas', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'swadh1n',
    twitter: 'swadh1n',
    mastodon: '#',
    facebook: 'swadh1n',
    instagram: 'swadh1n',
    dribbble: 'swadh1n',
    behance: '',
    medium: 'swadh1n',
    dev: 'swadh1n',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'swadhinbiswas.cse@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Data Science',
    'Data Engineering',
    'JavaScript',
    'React.js',
    'Node.js',
    'Data structure & Algorithms',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    '',
    'Go',
    'Artificial Intelligence',
    'Website development',
    'Python',
    'Problem solving',

  ],
  experiences: [
    {
      company: 'CODEXFOREM',
      position: 'Founder',
      from: 'September 2022',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Daffodil International University',
      degree: 'BSC in CSE',
      from: '2022',
      to: '2026',
    },
    {
      institution: 'Dhaka city College',
      degree: 'higher school certificate',
      from: '2018',
      to: '2018',

    },
    {
      institution: 'Sahmid Smrity College',
      degree: 'Higher School Certificate',
      from: '2019',
      to: '2020',
      
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '',
      description:
        '',
      imageUrl: '',
      link: '',
    },
    {
      title: '',
      description:
        '',
      imageUrl: '',
      link: '',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'swadh1n', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      
      'cyberpunk',
      
      'black',
      
      'dracula',
      'night',
     
    ],

    // Custom theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="#"
      target="_blank"
      rel="noreferrer"
    >codexforem</a> and ❤️`,
};

export default config;
