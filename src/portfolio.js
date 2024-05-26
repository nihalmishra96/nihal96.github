/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nihal Mishra",
  title: "Hi all, I'm Nihal Mishra",
  subTitle: emoji(
    "A passionate Data Scientist 🚀 having an experience of building and deploying Machine Learnin algorithms from scratch using Python. Extensively used deep learning frameworks like Tensorflow and Keras. Exposure to cloud platforms like Microsoft Azure and Amazon Web Services (AWS).Passionate about implementing custom deep learning algorithms." ),
  // resumeLink:
    // "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nihalmishra96",
  linkedin: "https://www.linkedin.com/in/nihal-mishra96/",
  gmail: "nihal.mish9996@gmail.com",
  
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY Data Scientist WHO WANTS TO EXPLORE THE DATA AND BUILD IMPACTFUL MACHINE LEARNING MODELS TO HELP BUSINESS MAKE BETTER INFORMED DECISIONS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  
softwareSkills : [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "R", fontAwesomeClassname: "fab fa-r-project" },
  { skillName: "Hadoop", fontAwesomeClassname: "fas fa-hdd" },
  { skillName: "PySpark", fontAwesomeClassname: "fas fa-code" },
  { skillName: "Matlab", fontAwesomeClassname: "fas fa-calculator" },
  { skillName: "Scikit-learn", fontAwesomeClassname: "fas fa-brain" },
  { skillName: "Numpy", fontAwesomeClassname: "fas fa-square-root-alt" },
  { skillName: "PyTorch", fontAwesomeClassname: "fas fa-fire" },
  { skillName: "Keras", fontAwesomeClassname: "fas fa-brain" },
  { skillName: "NLP", fontAwesomeClassname: "fas fa-comment" },
  { skillName: "LLM", fontAwesomeClassname: "fas fa-robot" },
  { skillName: "Deep Learning", fontAwesomeClassname: "fas fa-network-wired" },
  { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "MS SQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "SQLite3", fontAwesomeClassname: "fas fa-database" },
  { skillName: "RShiny", fontAwesomeClassname: "fas fa-chart-line" },
  { skillName: "A/B Testing", fontAwesomeClassname: "fas fa-vial" },
  { skillName: "Predictive Modeling", fontAwesomeClassname: "fas fa-chart-line" },
  { skillName: "Time Series Forecasting", fontAwesomeClassname: "fas fa-chart-area" },
  { skillName: "SSIS", fontAwesomeClassname: "fas fa-project-diagram" },
  { skillName: "Talend", fontAwesomeClassname: "fas fa-code-branch" },
  { skillName: "Informatica", fontAwesomeClassname: "fas fa-file-import" },
  { skillName: "Matplotlib", fontAwesomeClassname: "fas fa-chart-line" },
  { skillName: "Seaborn", fontAwesomeClassname: "fas fa-chart-line" },
  { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-pie" },
  { skillName: "PowerBI", fontAwesomeClassname: "fas fa-chart-bar" },
  { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
  { skillName: "Microsoft Azure", fontAwesomeClassname: "fab fa-microsoft" },
  { skillName: "Google Cloud Platform", fontAwesomeClassname: "fab fa-google" }
],
  // softwareSkills: [
  //   {
  //     skillName: "Python",
  //     fontAwesomeClassname: "fab fa-python"
  //   },
  //   {
  //     skillName: "sql-database",
  //     fontAwesomeClassname: "fas fa-database"
  //   },
  //   {
  //     skillName: "R",
  //     fontAwesomeClassname: "fab fa-r-project"
  //   },
  //   {
  //     skillName: "JavaScript",
  //     fontAwesomeClassname: "fab fa-js"
  //   },
  //   {
  //     skillName: "reactjs",
  //     fontAwesomeClassname: "fab fa-react"
  //   },
  //   {
  //     skillName: "nodejs",
  //     fontAwesomeClassname: "fab fa-node"
  //   },
  //   {
  //     skillName: "Machine Learning",
  //     fontAwesomeClassname: "fa-duotone fa-laptop-code"
  //   },
  //   {
  //     skillName: "npm",
  //     fontAwesomeClassname: "fab fa-npm"
  //   },
    
  //   {
  //     skillName: "aws",
  //     fontAwesomeClassname: "fab fa-aws"
  //   },
  //   {
  //     skillName: "Hadoop",
  //     fontAwesomeClassname: "fas fa-hdd"
  //   },
    
  //   {
  //     skillName: "docker",
  //     fontAwesomeClassname: "fab fa-docker"
  //   }
  // ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: " University at Buffalo, The State University of New York",
      logo: require("./assets/images/ub.jpeg"),
      subHeader: "Master of Science in Data Science",
      duration: "August 2022 - December 2023",
      desc: "Relevant Coursework",
      descBullets: [
        "Intro to Machine Learning",
        "Data Intensive Computing",
        "Data Models Query Language",
        "Statistical Learning",
        "Introduction to Numerical Mathematics for Computing and Data Scientists",
        "Programming and Database Fundamentals for Data Scientists"
    
        
      ]
    },
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("./assets/images/VITLOGO.png"),
      subHeader: "Bachelor of Technology in Mechanical Engineering",
      duration: "July 2016 - July 2020",
      // desc: "Relevant Coursework",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning Frameworks/ Libraries", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Database/ Storage",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Business Intelligence Analyst",
      company: "eClinicalWorks",
      companylogo: require("./assets/images/ec.jpeg"),
      date: "February 2024 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Built a predictive model using PySpark to understand if a patient will be visiting healthcare providers in 2 months",
        "Ingested data from various sources through SQL, AWS data lake using Python to create data views that’s are consumed by users for Medical Staff Burnout Analysis"
              ]
    },
    {
      role: "Business Intelligence Intern",
      company: "eClinicalWorks",
      companylogo: require("./assets/images/ec.jpeg"),
      date: "May 2023 – December 2023",
      descBullets: [ "Developed and maintained an Extract, Transform and Load (ETL) pipeline to automate the process of retrieving and loading the data",
      "Used Python extensively for data cleaning and performed statistical analysis, thereby generating valuable insights from EHR data and presented the key findings through data visualization"
    ]
    },
    {
      role: "Associate (Data Scientist)",
      company: "ZoomRx",
      companylogo: require("./assets/images/zoomrx_logo.jpeg"),
      date: "August 2021 – July 2022",
      descBullets: [ "Designed interactive dashboards using Tableau to track important KPIs and used SQL and Python to automate extraction and manipulation of data that was accessed by over 25 stakeholders on a weekly basis",
      "Predicted annual growth for medicines with XGBoost, Random Forest and Neural Networks using Python"
    ]
    },
    {
      role: "Programmer Analyst Trainee",
      company: "Cognizant",
      companylogo: require("./assets/images/cog.webp"),
      date: "September 2020 – June 2021",
      descBullets: [ "Collaborated with team members for work on developing and modifying client database using mainframe systems and utilized SQL to extract and manipulate data",
      "Designed the structure of source code and executed the migration of 5 databases from Oracle to Amazon Redshift which led to increased scalability and reduce cost by 35%"
  ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Data Science Projects using NLP, Machine Learning Algorithms, Web Scraping, Data Visualization and Predictive Modeling",
  projects: [
    {
      image: require("./assets/images/books.jpeg"),
      projectName: "Book Recommendation System with Content Based Filtering ",
      projectDesc: "Developed a Recommendation system model using content-based filtering and implemented TF-IDF vectorization to extract features from book descriptions and utilized cosine similarity to measure similarity between the books ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/nihalmishra96/Recommendation-Systems"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cc.jpg"),
      projectName: "Credit Card Approval Prediction ",
      projectDesc: "Deployed a Machine Learning model using Gradio and built an API which collects the data and provides real time credit card approval predictions",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/nihalmishra96/Credit-Card-Approval-Prediction"
        }
      ]
    },
    {
      image: require("./assets/images/web.jpeg"),
      projectName: "Web Scraping",
      projectDesc: "Performed web scraping using Selenium and BeautifulSoup to extract the top 50 coffee shops in New York from yelp.com and exported the scraped data to json file",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/nihalmishra96/Web-Scraping"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "716-936-4097",
  email_address: "nihal.mish9996@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
