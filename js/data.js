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
    bio: "Hello! I'm Abin Mathew, a dedicated software engineer with 17+ years of experience crafting robust, scalable applications across web, desktop, API, and enterprise platforms. I thrive on turning complex problems into elegant solutions and love working with teams to bring ideas to life.",
    journey: "My journey in tech has taken me through leading development teams, mentoring fellow engineers, and closely collaborating with stakeholders to deliver impactful results. Lately, I've been exploring the power of AI, building smart chatbots and intelligent systems that push boundaries.",
    hobbies: "I'm passionate about continuous learning, emerging technologies, and driving innovation through collaboration. Whether it’s a challenging project or a new tech trend, I’m always excited to dive in and grow.",
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
        title: "Excellent Contributor",
        year: "University of Nottingham, 2022",
        logo: `<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M828.5 180.1h-9.9v-54.7h23.5v-44H182v44h23v54.7h-9.5C123.2 180.1 64 239.2 64 311.5v0.1c0 72.3 59.2 131.5 131.5 131.5h9.6c0 1.3 0.1 2.5 0.1 3.7 0.5 17.7 2.7 35.4 6.2 52.5 17.8 85.7 71.8 160 148.3 204 4.8 2.8 9.8 5.4 14.7 7.9 15.3 7.7 31.2 14.1 47.4 19.2 3.4 1 6.8 2 10.2 2.9v165.2H250.4v44h511.9v-44H591.9V733.4c3.7-1 7.3-2.1 10.9-3.2 16.2-5.1 32.2-11.6 47.4-19.4 5-2.5 10-5.3 14.8-8.1 75.6-43.9 129.2-117.8 147-202.7 3.6-17.2 5.8-34.9 6.3-52.4 0.1-1.5 0.1-3 0.1-4.5h10c72.3 0 131.5-59.2 131.5-131.5v-0.1c0.1-72.3-59.1-131.4-131.4-131.4zM205 399.2h-9.5c-23.2 0-45.1-9.1-61.7-25.7s-25.7-38.5-25.7-61.7v-0.1c0-23.2 9.1-45.2 25.7-61.7 16.6-16.6 38.5-25.7 61.7-25.7h9.5v174.9z m370.9 499.4h-128V737.3c20.9 4.5 42.3 6.8 63.9 6.8 21.7 0 43.1-2.3 64.1-6.8v161.3z m198.7-461.4c0 2.9 0 5.9-0.2 8.9-0.5 15-2.3 30.1-5.4 44.9-15.3 72.7-61.2 136-126.1 173.7-4.1 2.4-8.4 4.7-12.7 6.9-13 6.6-26.7 12.2-40.6 16.6-25.2 7.9-51.4 11.9-77.9 11.9-26.2 0-52.2-3.9-77.1-11.6-13.9-4.3-27.5-9.8-40.6-16.4-4.2-2.1-8.5-4.4-12.6-6.8-65.4-37.8-111.7-101.5-126.9-174.8-3.1-14.7-4.9-29.8-5.3-45-0.1-2.7-0.1-5.5-0.1-8.2v-312h525.6v311.9zM916 311.7c0 23.2-9.1 45.2-25.7 61.7-16.6 16.6-38.5 25.7-61.7 25.7h-9.9v-175h9.9c23.2 0 45.1 9.1 61.7 25.7s25.7 38.5 25.7 61.7v0.2z" fill="#39393A"></path><path d="M317.428 274.917l70.145-70.144 14.142 14.142-70.145 70.144zM316.055 351.98L456.13 211.904l14.142 14.142-140.076 140.076zM555.4 659.6l-4.8-19.4c0.3-0.1 26.5-6.8 55.4-23.5 37.8-21.9 62-49.7 72-82.7l19.1 5.8c-11.4 37.6-39.6 70.3-81.6 94.5-31.2 18-58.9 25-60.1 25.3z" fill="#E73B37"></path></g></svg>`
    },
    {
        title: "Super Star",
        year: "UST Global, 2021",
        logo: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="star"> <g id="star_2"> <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M22.6988 4.8956L18.2481 17.9614H5.4002C4.03895 17.9614 3.48002 19.7095 4.58648 20.5008L15.1262 28.006C15.576 28.3263 16.2004 28.2213 16.5208 27.7714C16.8411 27.3216 16.7361 26.6972 16.2863 26.3768L7.27697 19.9614H18.5362C19.2198 19.9614 19.8313 19.5251 20.0501 18.874L23.9547 7.41137L26.6334 15.2893C26.8112 15.8122 27.3793 16.092 27.9021 15.9142C28.425 15.7364 28.7048 15.1683 28.527 14.6455L25.213 4.89946C24.7999 3.70066 23.1105 3.70066 22.6988 4.8956ZM12.1763 43.6127C11.026 44.6869 9.61068 43.3261 10.0353 42.0652L13.9053 30.7092C14.0834 30.1865 14.6516 29.9071 15.1744 30.0853C15.6971 30.2634 15.9765 30.8316 15.7983 31.3544L12.6107 40.7082L23.0715 32.3427C23.5767 31.8712 24.3414 31.8712 24.7805 32.2929L35.3001 40.7115L31.0362 28.1991C30.8052 27.5277 31.0467 26.7849 31.6238 26.3772L40.633 19.9618H28.9558C28.4035 19.9618 27.9558 19.5141 27.9558 18.9618C27.9558 18.4095 28.4035 17.9618 28.9558 17.9618H42.5098C43.8711 17.9618 44.4337 19.7122 43.3219 20.5024L33.0249 27.8347L37.8755 42.0687C38.2987 43.3253 36.8889 44.6839 35.7911 43.6627L23.9575 34.1914L12.1763 43.6127ZM10.8691 42.1009L10.9749 42.0163C10.9393 42.0401 10.9039 42.0681 10.8691 42.1009ZM37.0956 42.1484C37.0575 42.1131 37.0191 42.0825 36.9807 42.0564L37.0956 42.1484Z" fill="#000000"></path> </g> </g> </g></svg>`
    },
    {
        title: "Rising Star",
        year: "UST Global, 2021",
        logo: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="star"> <g id="star_2"> <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M22.6988 4.8956L18.2481 17.9614H5.4002C4.03895 17.9614 3.48002 19.7095 4.58648 20.5008L15.1262 28.006C15.576 28.3263 16.2004 28.2213 16.5208 27.7714C16.8411 27.3216 16.7361 26.6972 16.2863 26.3768L7.27697 19.9614H18.5362C19.2198 19.9614 19.8313 19.5251 20.0501 18.874L23.9547 7.41137L26.6334 15.2893C26.8112 15.8122 27.3793 16.092 27.9021 15.9142C28.425 15.7364 28.7048 15.1683 28.527 14.6455L25.213 4.89946C24.7999 3.70066 23.1105 3.70066 22.6988 4.8956ZM12.1763 43.6127C11.026 44.6869 9.61068 43.3261 10.0353 42.0652L13.9053 30.7092C14.0834 30.1865 14.6516 29.9071 15.1744 30.0853C15.6971 30.2634 15.9765 30.8316 15.7983 31.3544L12.6107 40.7082L23.0715 32.3427C23.5767 31.8712 24.3414 31.8712 24.7805 32.2929L35.3001 40.7115L31.0362 28.1991C30.8052 27.5277 31.0467 26.7849 31.6238 26.3772L40.633 19.9618H28.9558C28.4035 19.9618 27.9558 19.5141 27.9558 18.9618C27.9558 18.4095 28.4035 17.9618 28.9558 17.9618H42.5098C43.8711 17.9618 44.4337 19.7122 43.3219 20.5024L33.0249 27.8347L37.8755 42.0687C38.2987 43.3253 36.8889 44.6839 35.7911 43.6627L23.9575 34.1914L12.1763 43.6127ZM10.8691 42.1009L10.9749 42.0163C10.9393 42.0401 10.9039 42.0681 10.8691 42.1009ZM37.0956 42.1484C37.0575 42.1131 37.0191 42.0825 36.9807 42.0564L37.0956 42.1484Z" fill="#000000"></path> </g> </g> </g></svg>`
    },
    {
        title: "Experian Excel Badges",
        year: "Experian, 2010 - 2021",
        logo: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M424.747,4.544C422.741,1.707,419.477,0,416,0H309.333c-4.501,0-8.533,2.837-10.069,7.083l-43.712,122.389L212.736,7.147 C211.243,2.859,207.189,0,202.667,0H96c-3.477,0-6.741,1.685-8.747,4.544c-1.984,2.859-2.475,6.507-1.28,9.771l82.709,227.456 c-37.483,27.157-62.016,71.168-62.016,120.896C106.667,445.013,173.653,512,256,512s149.333-66.987,149.333-149.333 c0-49.728-24.533-93.739-62.016-120.896l82.709-227.456C427.221,11.029,426.731,7.381,424.747,4.544z M111.232,21.333h83.861 l67.328,192.32c-2.155-0.085-4.267-0.32-6.421-0.32c-24.811,0-48.192,6.165-68.8,16.917L111.232,21.333z M384,362.667 c0,70.592-57.408,128-128,128s-128-57.408-128-128s57.408-128,128-128S384,292.075,384,362.667z M324.8,230.251 c-12.096-6.315-25.088-11.093-38.827-13.909l-19.2-54.848l50.069-140.16h83.925L324.8,230.251z"></path> <path d="M214.464,314.091c2.645,5.269,9.024,7.403,14.315,4.779L256,305.259v132.075c0,5.888,4.779,10.667,10.667,10.667 s10.667-4.779,10.667-10.667V288c0-3.691-1.92-7.125-5.056-9.088c-3.157-1.963-7.061-2.133-10.368-0.469l-42.667,21.333 C213.973,302.421,211.819,308.821,214.464,314.091z"></path> </g> </g> </g> </g></svg>`
    },
    {
        title: "Shining Star",
        year: "UST Global, 2020",
        logo: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="star"> <g id="star_2"> <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M22.6988 4.8956L18.2481 17.9614H5.4002C4.03895 17.9614 3.48002 19.7095 4.58648 20.5008L15.1262 28.006C15.576 28.3263 16.2004 28.2213 16.5208 27.7714C16.8411 27.3216 16.7361 26.6972 16.2863 26.3768L7.27697 19.9614H18.5362C19.2198 19.9614 19.8313 19.5251 20.0501 18.874L23.9547 7.41137L26.6334 15.2893C26.8112 15.8122 27.3793 16.092 27.9021 15.9142C28.425 15.7364 28.7048 15.1683 28.527 14.6455L25.213 4.89946C24.7999 3.70066 23.1105 3.70066 22.6988 4.8956ZM12.1763 43.6127C11.026 44.6869 9.61068 43.3261 10.0353 42.0652L13.9053 30.7092C14.0834 30.1865 14.6516 29.9071 15.1744 30.0853C15.6971 30.2634 15.9765 30.8316 15.7983 31.3544L12.6107 40.7082L23.0715 32.3427C23.5767 31.8712 24.3414 31.8712 24.7805 32.2929L35.3001 40.7115L31.0362 28.1991C30.8052 27.5277 31.0467 26.7849 31.6238 26.3772L40.633 19.9618H28.9558C28.4035 19.9618 27.9558 19.5141 27.9558 18.9618C27.9558 18.4095 28.4035 17.9618 28.9558 17.9618H42.5098C43.8711 17.9618 44.4337 19.7122 43.3219 20.5024L33.0249 27.8347L37.8755 42.0687C38.2987 43.3253 36.8889 44.6839 35.7911 43.6627L23.9575 34.1914L12.1763 43.6127ZM10.8691 42.1009L10.9749 42.0163C10.9393 42.0401 10.9039 42.0681 10.8691 42.1009ZM37.0956 42.1484C37.0575 42.1131 37.0191 42.0825 36.9807 42.0564L37.0956 42.1484Z" fill="#000000"></path> </g> </g> </g></svg>`
    },
    {
        title: "Passionate Entrepreneurship",
        year: "UST Global, 2018",
        logo: `<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M828.5 180.1h-9.9v-54.7h23.5v-44H182v44h23v54.7h-9.5C123.2 180.1 64 239.2 64 311.5v0.1c0 72.3 59.2 131.5 131.5 131.5h9.6c0 1.3 0.1 2.5 0.1 3.7 0.5 17.7 2.7 35.4 6.2 52.5 17.8 85.7 71.8 160 148.3 204 4.8 2.8 9.8 5.4 14.7 7.9 15.3 7.7 31.2 14.1 47.4 19.2 3.4 1 6.8 2 10.2 2.9v165.2H250.4v44h511.9v-44H591.9V733.4c3.7-1 7.3-2.1 10.9-3.2 16.2-5.1 32.2-11.6 47.4-19.4 5-2.5 10-5.3 14.8-8.1 75.6-43.9 129.2-117.8 147-202.7 3.6-17.2 5.8-34.9 6.3-52.4 0.1-1.5 0.1-3 0.1-4.5h10c72.3 0 131.5-59.2 131.5-131.5v-0.1c0.1-72.3-59.1-131.4-131.4-131.4zM205 399.2h-9.5c-23.2 0-45.1-9.1-61.7-25.7s-25.7-38.5-25.7-61.7v-0.1c0-23.2 9.1-45.2 25.7-61.7 16.6-16.6 38.5-25.7 61.7-25.7h9.5v174.9z m370.9 499.4h-128V737.3c20.9 4.5 42.3 6.8 63.9 6.8 21.7 0 43.1-2.3 64.1-6.8v161.3z m198.7-461.4c0 2.9 0 5.9-0.2 8.9-0.5 15-2.3 30.1-5.4 44.9-15.3 72.7-61.2 136-126.1 173.7-4.1 2.4-8.4 4.7-12.7 6.9-13 6.6-26.7 12.2-40.6 16.6-25.2 7.9-51.4 11.9-77.9 11.9-26.2 0-52.2-3.9-77.1-11.6-13.9-4.3-27.5-9.8-40.6-16.4-4.2-2.1-8.5-4.4-12.6-6.8-65.4-37.8-111.7-101.5-126.9-174.8-3.1-14.7-4.9-29.8-5.3-45-0.1-2.7-0.1-5.5-0.1-8.2v-312h525.6v311.9zM916 311.7c0 23.2-9.1 45.2-25.7 61.7-16.6 16.6-38.5 25.7-61.7 25.7h-9.9v-175h9.9c23.2 0 45.1 9.1 61.7 25.7s25.7 38.5 25.7 61.7v0.2z" fill="#39393A"></path><path d="M317.428 274.917l70.145-70.144 14.142 14.142-70.145 70.144zM316.055 351.98L456.13 211.904l14.142 14.142-140.076 140.076zM555.4 659.6l-4.8-19.4c0.3-0.1 26.5-6.8 55.4-23.5 37.8-21.9 62-49.7 72-82.7l19.1 5.8c-11.4 37.6-39.6 70.3-81.6 94.5-31.2 18-58.9 25-60.1 25.3z" fill="#36c4e7"></path></g></svg>`
    },
    {
        title: "Experian Excel Award",
        year: "Experian, 2015",
        logo: `<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M828.5 180.1h-9.9v-54.7h23.5v-44H182v44h23v54.7h-9.5C123.2 180.1 64 239.2 64 311.5v0.1c0 72.3 59.2 131.5 131.5 131.5h9.6c0 1.3 0.1 2.5 0.1 3.7 0.5 17.7 2.7 35.4 6.2 52.5 17.8 85.7 71.8 160 148.3 204 4.8 2.8 9.8 5.4 14.7 7.9 15.3 7.7 31.2 14.1 47.4 19.2 3.4 1 6.8 2 10.2 2.9v165.2H250.4v44h511.9v-44H591.9V733.4c3.7-1 7.3-2.1 10.9-3.2 16.2-5.1 32.2-11.6 47.4-19.4 5-2.5 10-5.3 14.8-8.1 75.6-43.9 129.2-117.8 147-202.7 3.6-17.2 5.8-34.9 6.3-52.4 0.1-1.5 0.1-3 0.1-4.5h10c72.3 0 131.5-59.2 131.5-131.5v-0.1c0.1-72.3-59.1-131.4-131.4-131.4zM205 399.2h-9.5c-23.2 0-45.1-9.1-61.7-25.7s-25.7-38.5-25.7-61.7v-0.1c0-23.2 9.1-45.2 25.7-61.7 16.6-16.6 38.5-25.7 61.7-25.7h9.5v174.9z m370.9 499.4h-128V737.3c20.9 4.5 42.3 6.8 63.9 6.8 21.7 0 43.1-2.3 64.1-6.8v161.3z m198.7-461.4c0 2.9 0 5.9-0.2 8.9-0.5 15-2.3 30.1-5.4 44.9-15.3 72.7-61.2 136-126.1 173.7-4.1 2.4-8.4 4.7-12.7 6.9-13 6.6-26.7 12.2-40.6 16.6-25.2 7.9-51.4 11.9-77.9 11.9-26.2 0-52.2-3.9-77.1-11.6-13.9-4.3-27.5-9.8-40.6-16.4-4.2-2.1-8.5-4.4-12.6-6.8-65.4-37.8-111.7-101.5-126.9-174.8-3.1-14.7-4.9-29.8-5.3-45-0.1-2.7-0.1-5.5-0.1-8.2v-312h525.6v311.9zM916 311.7c0 23.2-9.1 45.2-25.7 61.7-16.6 16.6-38.5 25.7-61.7 25.7h-9.9v-175h9.9c23.2 0 45.1 9.1 61.7 25.7s25.7 38.5 25.7 61.7v0.2z" fill="#39393A"></path><path d="M317.428 274.917l70.145-70.144 14.142 14.142-70.145 70.144zM316.055 351.98L456.13 211.904l14.142 14.142-140.076 140.076zM555.4 659.6l-4.8-19.4c0.3-0.1 26.5-6.8 55.4-23.5 37.8-21.9 62-49.7 72-82.7l19.1 5.8c-11.4 37.6-39.6 70.3-81.6 94.5-31.2 18-58.9 25-60.1 25.3z" fill="#ee6dcb"></path></g></svg>`
    },
    {
        title: "Spot Award",
        year: "Dell, 2012",
        logo: `<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M828.5 180.1h-9.9v-54.7h23.5v-44H182v44h23v54.7h-9.5C123.2 180.1 64 239.2 64 311.5v0.1c0 72.3 59.2 131.5 131.5 131.5h9.6c0 1.3 0.1 2.5 0.1 3.7 0.5 17.7 2.7 35.4 6.2 52.5 17.8 85.7 71.8 160 148.3 204 4.8 2.8 9.8 5.4 14.7 7.9 15.3 7.7 31.2 14.1 47.4 19.2 3.4 1 6.8 2 10.2 2.9v165.2H250.4v44h511.9v-44H591.9V733.4c3.7-1 7.3-2.1 10.9-3.2 16.2-5.1 32.2-11.6 47.4-19.4 5-2.5 10-5.3 14.8-8.1 75.6-43.9 129.2-117.8 147-202.7 3.6-17.2 5.8-34.9 6.3-52.4 0.1-1.5 0.1-3 0.1-4.5h10c72.3 0 131.5-59.2 131.5-131.5v-0.1c0.1-72.3-59.1-131.4-131.4-131.4zM205 399.2h-9.5c-23.2 0-45.1-9.1-61.7-25.7s-25.7-38.5-25.7-61.7v-0.1c0-23.2 9.1-45.2 25.7-61.7 16.6-16.6 38.5-25.7 61.7-25.7h9.5v174.9z m370.9 499.4h-128V737.3c20.9 4.5 42.3 6.8 63.9 6.8 21.7 0 43.1-2.3 64.1-6.8v161.3z m198.7-461.4c0 2.9 0 5.9-0.2 8.9-0.5 15-2.3 30.1-5.4 44.9-15.3 72.7-61.2 136-126.1 173.7-4.1 2.4-8.4 4.7-12.7 6.9-13 6.6-26.7 12.2-40.6 16.6-25.2 7.9-51.4 11.9-77.9 11.9-26.2 0-52.2-3.9-77.1-11.6-13.9-4.3-27.5-9.8-40.6-16.4-4.2-2.1-8.5-4.4-12.6-6.8-65.4-37.8-111.7-101.5-126.9-174.8-3.1-14.7-4.9-29.8-5.3-45-0.1-2.7-0.1-5.5-0.1-8.2v-312h525.6v311.9zM916 311.7c0 23.2-9.1 45.2-25.7 61.7-16.6 16.6-38.5 25.7-61.7 25.7h-9.9v-175h9.9c23.2 0 45.1 9.1 61.7 25.7s25.7 38.5 25.7 61.7v0.2z" fill="#39393A"></path><path d="M317.428 274.917l70.145-70.144 14.142 14.142-70.145 70.144zM316.055 351.98L456.13 211.904l14.142 14.142-140.076 140.076zM555.4 659.6l-4.8-19.4c0.3-0.1 26.5-6.8 55.4-23.5 37.8-21.9 62-49.7 72-82.7l19.1 5.8c-11.4 37.6-39.6 70.3-81.6 94.5-31.2 18-58.9 25-60.1 25.3z" fill="#36e79b"></path></g></svg>`
    }
];

// Experience data
window.experienceData = [
    {
        title: "Senior Software Engineer @ Company Name 1",
        period: "Jan 2023 - Present",
        location: "London, UK",
        website: "company1.com",
        description: "Led the development of key features for the company's flagship product, resulting in a 30% increase in user engagement. Collaborated with cross-functional teams to implement new technologies and improve existing systems.",
        skills: ["React", "Node.js", "TypeScript"],
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff5722" class="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>`
    },
    {
        title: "Software Engineer @ Company Name 2",
        period: "Mar 2020 - Dec 2022",
        location: "Manchester, UK",
        website: "company2.com",
        description: "Developed and maintained web applications using modern JavaScript frameworks. Implemented responsive designs and optimized application performance.",
        skills: ["JavaScript", "Vue.js", "CSS"],
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4f46e5" class="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>`
    },
    {
        title: "Developer @ Company Name 3",
        period: "Jun 2018 - Feb 2020",
        location: "Birmingham, UK",
        website: "company3.com",
        description: "Worked on backend systems and APIs. Collaborated with the frontend team to ensure seamless integration.",
        skills: ["Java", "Spring", "SQL"],
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#10b981" class="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>`
    },
    {
        title: "Junior Developer @ Company Name 4",
        period: "Sep 2016 - May 2018",
        location: "Leeds, UK",
        website: "company4.com",
        description: "Assisted in the development of web applications and learned various technologies and frameworks.",
        skills: ["HTML", "CSS", "JavaScript"],
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" class="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>`
    },
    {
        title: "Software Developer Intern @ Company Name 5",
        period: "Jan 2015 - Aug 2016",
        location: "Bristol, UK",
        website: "company5.com",
        description: "Gained hands-on experience in software development and worked on various projects under supervision.",
        skills: ["C#", ".NET"],
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6366f1" class="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>`
    },
    {
        title: "Technical Support @ Company Name 6",
        period: "Jun 2013 - Dec 2014",
        location: "Glasgow, UK",
        website: "company6.com",
        description: "Provided technical support to customers and resolved various software and hardware issues.",
        skills: ["Customer Support", "Troubleshooting"],
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ec4899" class="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>`
    },
    {
        title: "IT Support @ Company Name 7",
        period: "Feb 2012 - May 2013",
        location: "Edinburgh, UK",
        website: "company7.com",
        description: "Provided IT support and assistance to staff members. Managed hardware inventory and basic system administration tasks.",
        skills: ["IT Support", "Hardware", "Windows"],
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a855f7" class="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>`
    }
];

// Testimonials data
window.testimonialsData = [
    {
        name: "Jonathan Brazeau",
        title: "Product Design Leader at ChowNow",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        content: "Working with Matthew was an absolute game-changer for our company. He has this incredible knack for knowing exactly how a mockup is supposed to look and feel on the page. He was always collaborative and open to feedback and quick to offer thoughtful suggestions that elevated the design even further. It's rare to find someone who balances technical expertise with such a great eye for detail. He made the entire process seamless, and honestly, I'd jump at the chance to work with them again"
    },
    {
        name: "Trevor Streiber",
        title: "Lead Software Engineer at NewRelic",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        content: "Matt is AMAZING! If you have any doubt about hiring him, ask me – he'll never disappoint you!"
    },
    {
        name: "Rick Hou",
        title: "CEO & Founder at EyeCue Lab",
        image: "https://randomuser.me/api/portraits/men/62.jpg",
        content: "Matt is one of the best professionals that we have known in web development skills. He knows how to leverage the latest tech and comes in clutch when planning complex projects."
    }
];

// Technical skills data
window.technicalSkillsData = [
    {
        name: "UI/UX Design",
        percentage: 90
    },
    {
        name: "Programming",
        percentage: 85
    },
    {
        name: "Database Design",
        percentage: 80
    },
    {
        name: "System Design",
        percentage: 85
    },
    {
        name: "Data Analysis",
        percentage: 75
    }
];

// Soft skills data
window.softSkillsData = [
    "Innovation Driven",
    "Problem Solving",
    "Communication",
    "Leadership & Mentoring",
    "Adaptability",
    "Analytical Thinking",
    "Team Collaboration",
    "Initiatives & Ownership",
    "Critical Thinking",
    "Attention to Detail",
    "Continuous Learner",
    "Mentorship"
];

// No need to export as we're using window objects
