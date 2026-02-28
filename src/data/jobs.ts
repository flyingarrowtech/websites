export interface Job {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    tags: string[];
    description: string;
    responsibilities: string[];
    requirements: string[];
    about: string;
}

export const jobs: Job[] = [
    {
        id: 1,
        title: 'Senior Full Stack Engineer',
        department: 'Engineering',
        location: 'Remote (India)',
        type: 'Full-time',
        tags: ['React', 'Node.js', 'TypeScript', 'AWS'],
        description: 'Elite architecture and high-fidelity implementation for our core product suite. Lead a squad of engineers to deliver mission-critical SaaS infrastructure.',
        about: 'As a Senior Full Stack Engineer, you will be the backbone of our product development, crafting seamless end-to-end experiences that define the future of SaaS.',
        responsibilities: [
            'Architect and implement scalable, high-performance web applications.',
            'Lead technical design discussions and peer code reviews.',
            'Collaborate with product and design teams to refine user experiences.',
            'Mentor junior and mid-level engineers through technical challenges.',
            'Ensure code quality through rigorous testing and CI/CD best practices.'
        ],
        requirements: [
            '5+ years of experience with modern React and Node.js ecosystems.',
            'Deep understanding of TypeScript and functional programming patterns.',
            'Experience with AWS infrastructure (S3, CloudFront, Lambda, RDS).',
            'Strong proficiency in SQL and NoSQL database design.',
            'Excellent communication and leadership skills.'
        ]
    },
    {
        id: 2,
        title: 'React Native Developer',
        department: 'Mobile',
        location: 'Remote (India)',
        type: 'Contract',
        tags: ['React Native', 'iOS', 'Android', 'Redux'],
        description: 'Join our mobile task force to build hyper-performant cross-platform experiences. Focus on native-level fluidity and premium UI interaction.',
        about: 'We are looking for a mobile specialist who obsesses over frame rates and touch responsiveness to build elite-tier mobile products.',
        responsibilities: [
            'Develop high-fidelity mobile applications using React Native.',
            'Optimize mobile performance for smooth 60fps animations.',
            'Integrate native modules for platform-specific functionalities.',
            'Implement complex UI/UX designs with precision.',
            'Manage app store submission and release processes.'
        ],
        requirements: [
            '3+ years of experience in React Native development.',
            'Strong understanding of JavaScript/TypeScript and ES6+.',
            'Solid experience with Redux or other state management libraries.',
            'Knowledge of native build tools (Xcode, Android Studio).',
            'Portfolio of published cross-platform mobile apps.'
        ]
    },
    {
        id: 3,
        title: 'UX/UI Designer',
        department: 'Design',
        location: 'Remote (India)',
        type: 'Full-time',
        tags: ['Figma', 'Prototyping', 'Design Systems'],
        description: 'Architecting the visual language of the future. Create high-end, glassmorphism-driven interfaces for enterprise SaaS environments.',
        about: 'Design at our agency is not just about looks; it is about creating emotional connections through premium, interactive visual systems.',
        responsibilities: [
            'Design high-fidelity user interfaces and interaction models.',
            'Maintain and evolve our internal glassmorphism design system.',
            'Create interactive prototypes to validate design concepts.',
            'Conduct user research and usability testing sessions.',
            'Collaborate closely with engineers for pixel-perfect implementation.'
        ],
        requirements: [
            'Advanced proficiency in Figma and Adobe Creative Suite.',
            'Strong portfolio showcasing premium, modern UI/UX work.',
            'Deep understanding of typography, color theory, and layout.',
            'Experience building and documenting complex design systems.',
            'Familiarity with motion design and glassmorphism trends.'
        ]
    },
    {
        id: 4,
        title: 'DevOps Engineer',
        department: 'Infra',
        location: 'Remote (India)',
        type: 'Full-time',
        tags: ['Kubernetes', 'Docker', 'CI/CD', 'Terraform'],
        description: 'Automate excellence. Maintain high-availability cloud infrastructure and bulletproof deployment pipelines for global scale.',
        about: 'Our infrastructure is our bedrock. You will be responsible for ensuring that our high-fidelity products are served with 99.99% availability.',
        responsibilities: [
            'Design and manage Kubernetes-based cloud infrastructure.',
            'Build and maintain robust CI/CD pipelines (GitHub Actions, Jenkins).',
            'Implement infrastructure as code using Terraform or Pulumi.',
            'Monitor system performance and manage incident responses.',
            'Optimize cloud spending and resource allocation across AWS/GCP.'
        ],
        requirements: [
            '4+ years of experience in DevOps or Site Reliability Engineering.',
            'Deep expertise in Kubernetes and Docker containerization.',
            'Strong scripting skills (Bash, Python, or Go).',
            'Experience with monitoring tools like Prometheus and Grafana.',
            'Solid understanding of network security and cloud compliance.'
        ]
    },
];
