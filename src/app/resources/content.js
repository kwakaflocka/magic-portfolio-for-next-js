import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Sabrina',
    lastName:  'Kwak',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Design Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Bahasa']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/kwakaflocka',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/sabrina-kwak-6302b01ba/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:skwa@sas.upenn.edu',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Web Developer and Data Architect</>,
    subline: <>I'm Sabrina, a web developer and data architect passionate about building scalable and integrated digital solutions. With a background in biomedical research and technology integration, I bridge creativity and technical expertise to create impactful experiences.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Sabrina is a United States-based web developer and data architect experienced in building integrated digital solutions. Her work involves creating custom CMS tools, developing data integration systems, and building user-friendly interfaces for various industries.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Modern Campus',
                timeframe: 'October 2022 - June 2024',
                role: 'Web Developer II',
                achievements: [
                    <>Created custom CMS tools and templates for college campus clients, enhancing their ability to manage web content effectively.</>,
                    <>Performed large-scale migration of websites with over 15,000 pages from WordPress and Drupal.</>
                ],
                images: [ ]
            },
            {
                company: 'J-Hutch Consulting',
                timeframe: 'December 2021 - Present',
                role: 'Data Architect Consultant',
                achievements: [
                    <>Developed a restaurant SMS inventory tracker using Python and SQL, integrated with Toast API and Amazon S3 for automated inventory updates.</>,
                    <>Created an inventory management system user interface that allows product creation, quantity tracking, and QR code generation for easy updates.</>
                ],
                images: [ ]
            },

            {
                company: 'Haverford College',
                timeframe: 'January 2017-May 2019',
                role: 'Digital Scholar',
                achievements: [
                    <>Built webpages to feature class projects as a library service for students at Haverford College</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Haverford College',
                description: <>Bachelor of Science (BS) in Biology and Computer Science, with minors in Health Studies and Global Asian Studies.</>,
            },
            {
                name: 'Thinkful',
                description: <>Certificate in Data Science and Python, Graduation 2022.</>,
            },
            {
                name: 'Udemy',
                description: <>100 Days of Code - The Complete Python Pro Bootcamp, focusing on automation, app and web development, and machine learning.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Web Development',
                description: <>Proficient in HTML5, CSS, JavaScript, PHP, Python, and Ruby. Skilled in creating dynamic, responsive, and user-centered web applications.</>,
                images: []
            },
            {
                title: 'Data Architecture',
                description: <>Experience with iPaas, AWS, SQL, and Microsoft SQL Server Management Studio. Developed custom database integrations using JSON, XML, and CSV formats.</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about web development and data architecture...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Web development and data architecture projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };