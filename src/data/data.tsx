import {
  AcademicCapIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/background.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'My React Resume',
  description: "Resume site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sabina.`,
  description: (
    <>
      <p className="prose-sm text-dark sm:prose-base lg:prose-lg">
        I'm a Berlin based <strong className="text-dark">aspiring Software Developer </strong> 
        and a <strong className="text-dark">Computational Engineering Student</strong>.  
      </p>
      <p className="prose-sm text-dark sm:prose-base lg:prose-lg">
        In my free time I like to learn about machine learning and AI.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `Hi! I'm Sabina, a Computational Engineering student at Technische Universität Berlin.
   I'm currently expanding my skills in software development by learning new tools and frameworks and 
   building various projects. I'm passionate about both frontend and backend development and am eager to 
   apply my skills to real-life problems while continuing to learn and grow.`,
  aboutItems: [
    {label: 'Location', text: 'Berlin', Icon: MapIcon},
    //{label: 'Interests', text: 'AI, Gaming, Web design', Icon: SparklesIcon},
    {label: 'Study', text: 'Technische Universität Berlin', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Russian',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'German',
        level: 9,
      },
      {
        name: 'Japanese',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Vue.js',
        level: 7,
      },
      {
        name: 'Figma',
        level: 7,
      },
      
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Spring Boot',
        level: 8,
      },
      {
        name: 'Flask',
        level: 5,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'CSS',
        level: 9,
      },
      {
        name: 'Julia',
        level: 9,
      },
      {
        name: 'TypeScript',
        level: 4,
      },
      {
        name: 'SQL',
        level: 5,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2021 - present',
    location: 'Technische Universität Berlin',
    title: 'Bachelors in Computational Engineering Science',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2024',
    location: 'Berlin',
    title: 'iOS & Swift - The Complete iOS App Development Bootcamp | The Complete 2024 Web Development Bootcamp',
    content: <p></p>,
  },
 ];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'sabinabakhtiiarova@gmail.com',
      href: 'mailto:sabinabakhtiiarova@gmail.com',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sabinabakh'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sabina-bakhtiiarova/'},
];
