// Skills data for the portfolio website
window.skillsData = {
    categories: [
        {
            id: "operating-systems",
            title: "Operating Systems",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>`,
            skills: ["Windows", "Linux", "IBM Z/OS"]
        },
        {
            id: "programming-languages",
            title: "Programming Languages",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>`,
            skills: ["C# .NET, VB.NET", "Java, VB 6.0", "Python, COBOL", "JCL, REXX, CICS"]
        },
        {
            id: "azure-cloud",
            title: "Azure & Cloud",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>`,
            skills: ["Azure DevOps", "Azure Bicep, YAML", "Azure Repository, GIT"]
        },
        {
            id: "web-development",
            title: "Web Development",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>`,
            skills: ["HTML5, CSS3, jQuery, Bootstrap", "NodeJS, XML, AJAX, React", ".NET Core, MVC, Entity Framework"]
        },
        {
            id: "azure-services",
            title: "Azure Services",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>`,
            skills: ["Azure Function Apps, Web Apps", "Azure Service Bus, Storage Account", "Azure Key Vault, Azure AD"]
        },
        {
            id: "databases",
            title: "Databases",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>`,
            skills: ["SQL Server, MySQL, Access DB", "IBM DB2, VSAM"]
        },
        {
            id: "ai-ml",
            title: "AI/ML",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>`,
            skills: ["OpenAI (GPT models)", "Google (Gemini Models)", "RAG, Vector Databases, MCP"]
        },
        {
            id: "scripting-tools",
            title: "Scripting & Tools",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>`,
            skills: ["JavaScript, VB Script", "UNIX Shell Script, REXX", "VS Code, VS 2019, Eclipse"]
        },
        {
            id: "mobile-desktop",
            title: "Mobile & Desktop",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>`,
            skills: ["Flutter - Dart", "Windows Forms, WPF"]
        }
        /* {
            id: "design-tools",
            title: "Design Tools",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>`,
            skills: ["Adobe Photoshop", "Adobe Dreamweaver", "DaVinci Resolve"]
        } */
    ]
};

// Project data
window.projectsData = [
    {
        title: "Project Title 1",
        description: "A brief description of the project, what technologies were used, and what problems it solves.",
        image: "", // Add image URL if available
        projectUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Project Title 2",
        description: "A brief description of the project, what technologies were used, and what problems it solves.",
        image: "", // Add image URL if available
        projectUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Project Title 3",
        description: "A brief description of the project, what technologies were used, and what problems it solves.",
        image: "", // Add image URL if available
        projectUrl: "#",
        githubUrl: "#"
    }
];

// About data
window.aboutData = {
    bio: "Hello! I'm Abin Mathew, a passionate software developer with a keen eye for design and a love for creating elegant, user-friendly applications. With a background in [Your Background], I specialize in building modern web applications that combine functionality with aesthetic appeal.",
    journey: "My journey in tech began [Your Journey], and since then, I've been constantly learning and evolving my skills to stay at the forefront of web development trends and best practices.",
    hobbies: "When I'm not coding, you can find me [Your Hobbies/Interests].",
    image: "" // Add image URL if available
};

// Contact data
window.contactData = {
    email: "hello@abinmathew.com",
    location: "City, Country",
    social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
    }
};

// Awards data
window.awardsData = [
    {
        title: "Creative Circle Awards 1",
        year: "2023",
        logo: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white">
            <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="5" fill="none"/>
        </svg>`
    },
    {
        title: "The Dieline Package Design Awards",
        year: "2022",
        logo: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white">
            <path d="M20 20H80V80H20V20Z" stroke="currentColor" stroke-width="5" fill="none"/>
        </svg>`
    },
    {
        title: "Danish Design Awards",
        year: "2021",
        logo: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white">
            <path d="M50 10C72.0914 10 90 27.9086 90 50C90 72.0914 72.0914 90 50 90C27.9086 90 10 72.0914 10 50C10 27.9086 27.9086 10 50 10Z" stroke="currentColor" stroke-width="5" fill="none"/>
            <path d="M30 50L70 50" stroke="currentColor" stroke-width="5"/>
            <path d="M50 30L50 70" stroke="currentColor" stroke-width="5"/>
        </svg>`
    },
    {
        title: "Pentawards",
        year: "2020",
        logo: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white">
            <path d="M50 10L90 50L50 90L10 50L50 10Z" stroke="currentColor" stroke-width="5" fill="none"/>
        </svg>`
    },
    {
        title: "American Graphic Design Awards",
        year: "2019",
        logo: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white">
            <path d="M20 20H80V80H20V20Z" stroke="currentColor" stroke-width="5" fill="none"/>
            <path d="M35 35H65V65H35V35Z" stroke="currentColor" stroke-width="5" fill="none"/>
            <path d="M20 20L35 35" stroke="currentColor" stroke-width="5"/>
            <path d="M80 20L65 35" stroke="currentColor" stroke-width="5"/>
            <path d="M20 80L35 65" stroke="currentColor" stroke-width="5"/>
            <path d="M80 80L65 65" stroke="currentColor" stroke-width="5"/>
        </svg>`
    },
    {
        title: "D&AD Awards",
        year: "2018",
        logo: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white">
            <path d="M50 10L60 40H90L65 60L75 90L50 70L25 90L35 60L10 40H40L50 10Z" stroke="currentColor" stroke-width="3" fill="none"/>
        </svg>`
    },
    {
        title: "Red Dot Awards",
        year: "2017",
        logo: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white">
            <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="5" fill="none"/>
            <path d="M30 50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70C38.9543 70 30 61.0457 30 50Z" stroke="currentColor" stroke-width="3" fill="none"/>
            <path d="M50 30L50 70" stroke="currentColor" stroke-width="3"/>
            <path d="M30 50L70 50" stroke="currentColor" stroke-width="3"/>
        </svg>`
    },
    {
        title: "The London International Awards",
        year: "2016",
        logo: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white">
            <path d="M10 50H90" stroke="currentColor" stroke-width="5"/>
            <path d="M50 10V90" stroke="currentColor" stroke-width="5"/>
            <path d="M25 25L75 75" stroke="currentColor" stroke-width="5"/>
            <path d="M75 25L25 75" stroke="currentColor" stroke-width="5"/>
        </svg>`
    }
];

// No need to export as we're using window objects
