import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Damon Jackson Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Damon Jackson',
  subtitle: 'Software Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'Damon Jackson Headshot.jpg',
  paragraphOne: 'The technology field became my passion through my curiosity for learning about how things worked and trying to build them myself. Programming appealed to my passion by challenging me and teaching me how to analyze and solve complex problems. ',
  paragraphTwo: 'My experience leading an engineering team, developing personal projects, and expanding my coding knowledge has helped me to become a better leader, problem-solver, and programmer.',
  paragraphThree: '  ',
  resume: 'https://github.com/damonhjackson/Resume/raw/main/Damon_Jackson_Resume.PDF', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Black Jack Sim.png',
    title: 'Black Jack Simulator',
    info: 'The Black Jack Simulator is a simplified version of Blackjack. Each card is assigned a value rather than a face. The goal of the game is to land on or close to 21 without going over and to beat the dealers hand.',
    info2: 'The simulator starts by asking the player to play a game, then randomly assigns the player two card values. The player can choose to take more cards. If the player goes over 21 then he dealer wins. If the players hand is higher than the dealers hand, then the player wins and vise versa.',
    url: 'https://github.com/damonhjackson/School-projects/blob/main/BlackJack_Simulator.py',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tautologies Verifier.png',
    title: 'tautologies Verifier',
    info: 'The tautologies Verifier solves the inputed formulas by completing their truth tables.',
    info2: 'Running the program outputs the function to be solved, the problem number, and the truth table for that function. ',
    url: 'https://github.com/damonhjackson/School-projects/blob/main/tautologies%20Verifier.py',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Coin Toss Sim.png',
    title: 'Coin Toss Simulator',
    info: 'The Coin Toss simulator asks the user to enter the number of times the program will run. The program randomly chooses heads or tails and displays it for each coin toss.   ',
    info2: 'The program keeps track of how many times heads or tails was chosen and displays it.',
    url: 'https://github.com/damonhjackson/School-projects/blob/main/Coin%20Toss%20Simulator.py',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me',
  email: 'damonhjackson@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/damon-h-jackson/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/damonhjackson',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
