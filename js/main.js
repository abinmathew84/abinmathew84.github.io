// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    console.log('Skills data:', window.skillsData);
    console.log('Projects data:', window.projectsData);
    console.log('About data:', window.aboutData);
    console.log('Contact data:', window.contactData);
    console.log('Awards data:', window.awardsData);
    console.log('Experience data:', window.experienceData);
    console.log('Testimonials data:', window.testimonialsData);
    console.log('Hero data:', window.heroData);
    console.log('Education data:', window.educationData);
    
    // Render hero section from data
    renderHero();
    
    // Render skills from data
    renderSkills();
    
    // Render projects from data
    renderProjects();
    
    // Render about section from data
    renderAbout();
    
    // Render contact information from data
    renderContact();
    
    // Render awards from data
    renderAwards();
    
    // Render experience from data
    renderExperience();
    
    // Render testimonials from data
    renderTestimonials();
    
    // Render education from data
    renderEducation();
    
    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check for saved theme preference or use the system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply the saved theme or system preference
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // Toggle dark mode when the button is clicked
    darkModeToggle.addEventListener('click', function() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });

// Function to render skills from data
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    const technicalSkillsContainer = document.querySelector('.technical-skills-container');
    const softSkillsContainer = document.querySelector('.soft-skills-container');
    
    // Render skill categories
    if (skillsContainer) {
        // Clear existing content
        skillsContainer.innerHTML = '';
        
        // Render each skill category
        window.skillsData.categories.forEach((category, index) => {
            const delay = 100 + (index * 50);
            
            const categoryElement = document.createElement('div');
            categoryElement.className = 'bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md';
            categoryElement.setAttribute('data-aos', 'fade-up');
            categoryElement.setAttribute('data-aos-delay', delay);
            
            categoryElement.innerHTML = `
                <div class="flex items-center mb-4">
                    ${category.icon}
                    <h3 class="text-xl font-semibold">${category.title}</h3>
                </div>
                <ul class="space-y-2 text-gray-600 dark:text-gray-400">
                    ${category.skills.map(skill => `
                        <li class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            ${skill}
                        </li>
                    `).join('')}
                </ul>
            `;
            
            skillsContainer.appendChild(categoryElement);
        });
    }
    
    // Render technical skills
    if (technicalSkillsContainer) {
        technicalSkillsContainer.innerHTML = '';
        
        window.technicalSkillsData.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'mb-6';
            
            skillElement.innerHTML = `
                <div class="flex justify-between mb-1">
                    <span class="font-medium">${skill.name}</span>
                    <span>${skill.percentage}%</span>
                </div>
                <div class="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-black dark:bg-white h-2 rounded-full" style="width: ${skill.percentage}%"></div>
                </div>
            `;
            
            technicalSkillsContainer.appendChild(skillElement);
        });
    }
    
    // Render soft skills
    if (softSkillsContainer) {
        softSkillsContainer.innerHTML = '';
        
        // Create a grid layout for soft skills
        const softSkillsGrid = document.createElement('ul');
        softSkillsGrid.className = 'space-y-3 text-lg text-gray-600 dark:text-gray-400 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3';
        
        window.softSkillsData.forEach(skill => {
            const skillElement = document.createElement('li');
            skillElement.className = 'flex items-center';
            
            skillElement.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                ${skill}
            `;
            
            softSkillsGrid.appendChild(skillElement);
        });
        
        softSkillsContainer.appendChild(softSkillsGrid);
    }
}

// Function to render projects from data
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;
    
    // Clear existing content
    projectsContainer.innerHTML = '';
    
    // Render each project
    window.projectsData.forEach((project, index) => {
        const delay = 100 + (index * 100);
        
        const projectElement = document.createElement('div');
        projectElement.className = 'bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow';
        projectElement.setAttribute('data-aos', 'fade-up');
        projectElement.setAttribute('data-aos-delay', delay);
        
        projectElement.innerHTML = `
            <div class="aspect-video w-full bg-gray-300 dark:bg-gray-700">
                ${project.image ? `<img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">` : `
                <div class="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                `}
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
                <div class="flex space-x-4">
                    <a href="${project.projectUrl}" class="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">View Project</a>
                    <a href="${project.githubUrl}" class="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">GitHub</a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectElement);
    });
}

// Function to render about section from data
function renderAbout() {
    const bioElement = document.getElementById('bio');
    const journeyElement = document.getElementById('journey');
    const hobbiesElement = document.getElementById('hobbies');
    const profileImageContainer = document.getElementById('profile-image-container');
    
    if (bioElement) bioElement.textContent = window.aboutData.bio;
    if (journeyElement) journeyElement.textContent = window.aboutData.journey;
    if (hobbiesElement) hobbiesElement.textContent = window.aboutData.hobbies;
    
    if (profileImageContainer && window.aboutData.image) {
        profileImageContainer.innerHTML = `<img src="${window.aboutData.image}" alt="Abin Mathew" class="w-full h-full object-cover">`;
    }
}

// Function to render contact information from data
function renderContact() {
    const emailElement = document.getElementById('contact-email');
    const locationElement = document.getElementById('contact-location');
    const socialLinksContainer = document.getElementById('social-links');
    
    if (emailElement) emailElement.textContent = window.contactData.email;
    if (locationElement) locationElement.textContent = window.contactData.location;
    
    if (socialLinksContainer) {
        const { github, linkedin, twitter } = window.contactData.social;
        
        // Update href attributes of social links
        const githubLink = socialLinksContainer.querySelector('a[data-social="github"]');
        const linkedinLink = socialLinksContainer.querySelector('a[data-social="linkedin"]');
        const twitterLink = socialLinksContainer.querySelector('a[data-social="twitter"]');
        
        if (githubLink) githubLink.href = github;
        if (linkedinLink) linkedinLink.href = linkedin;
        if (twitterLink) twitterLink.href = twitter;
    }
}

// Function to render awards from data
function renderAwards() {
    const awardsContainer = document.getElementById('awards-container');
    if (!awardsContainer) return;
    
    // Clear existing content
    awardsContainer.innerHTML = '';
    
    // Render each award
    window.awardsData.forEach((award, index) => {
        const delay = 100 + (index * 50);
        
        const awardElement = document.createElement('div');
        awardElement.className = 'award-item';
        awardElement.setAttribute('data-aos', 'fade-up');
        awardElement.setAttribute('data-aos-delay', delay);
        
        awardElement.innerHTML = `
            <div class="award-logo">
                ${award.logo}
            </div>
            <h3 class="award-title">${award.title}</h3>
            <p class="award-year">${award.year}</p>
        `;
        
        awardsContainer.appendChild(awardElement);
    });
}

// Function to render experience from data
function renderExperience() {
    const experienceContainer = document.getElementById('experience-container');
    if (!experienceContainer) return;
    
    // Clear existing content
    experienceContainer.innerHTML = '';
    
    // Render each experience item
    window.experienceData.forEach((experience, index) => {
        const delay = 100 + (index * 50);
        
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';
        experienceItem.setAttribute('data-aos', 'fade-up');
        experienceItem.setAttribute('data-aos-delay', delay);
        
        experienceItem.innerHTML = `
            <button class="experience-header">
                <div>
                    <h3>${experience.title}</h3>
                </div>
                <div class="flex items-center">
                    <span class="mr-4">${experience.period}</span>
                    <div class="toggle-icon">
                        <span class="plus-icon">
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                </div>
            </button>
            <div class="experience-content">
                <div class="p-6">
                    <!-- Company Logo -->
                    <div class="experience-logo">
                        ${experience.logo}
                    </div>
                    
                    <!-- Meta Information -->
                    <div class="experience-meta">
                        <div class="experience-meta-item">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>${experience.location}</span>
                        </div>
                        <div class="experience-meta-item">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            <span>${experience.website}</span>
                        </div>
                    </div>
                    
                    <!-- Description -->
                    <p class="experience-description">
                        ${experience.description}
                    </p>
                    
                    <!-- Skills -->
                    <div class="experience-skills">
                        ${experience.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        
        experienceContainer.appendChild(experienceItem);
    });
    
    // Initialize the experience items after they are rendered
    initializeExperienceItems();
}

// Function to initialize experience items (expand/collapse functionality)
function initializeExperienceItems() {
    // Get all experience headers
    const experienceHeaders = document.querySelectorAll('.experience-header');
    
    // Function to close all experience items
    function closeAllExperienceItems() {
        experienceHeaders.forEach(header => {
            header.classList.remove('active');
            const content = header.nextElementSibling;
            content.style.maxHeight = null;
        });
    }
    
    // Add click event listener to each header
    experienceHeaders.forEach(header => {
        header.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the content element
            const content = this.nextElementSibling;
            
            // Check if this item is already active
            const isActive = this.classList.contains('active');
            
            // Close all items first
            closeAllExperienceItems();
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                // Add active class to the header
                this.classList.add('active');
                
                // Open the content
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
    
    // Ensure all experience items are closed by default
    closeAllExperienceItems();
}

// Function to render testimonials from data
function renderTestimonials() {
    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (!testimonialsContainer) return;
    
    // Clear existing content
    testimonialsContainer.innerHTML = '';
    
    // Render each testimonial
    window.testimonialsData.forEach((testimonial, index) => {
        const delay = 100 + (index * 100);
        
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial';
        testimonialElement.setAttribute('data-aos', 'fade-left');
        testimonialElement.setAttribute('data-aos-delay', delay);
        
        testimonialElement.innerHTML = `
            <div class="testimonial-quote">"</div>
            <div class="testimonial-author-image">
                <img src="${testimonial.image}" alt="${testimonial.name}">
            </div>
            <div class="testimonial-content">
                ${testimonial.content}
            </div>
            <div class="testimonial-author">
                <div class="testimonial-author-name">- ${testimonial.name}</div>
                <div class="testimonial-author-title">${testimonial.title}</div>
            </div>
        `;
        
        testimonialsContainer.appendChild(testimonialElement);
    });
}

// Function to render hero section from data
function renderHero() {
    const heroNameElement = document.querySelector('.hero-name');
    const heroTitleElement = document.querySelector('.hero-title');
    const heroTagNameElement = document.querySelector('.tag-name');
    const heroTagActionElement = document.querySelector('.tag-action');
    
    if (heroNameElement) heroNameElement.textContent = window.heroData.name;
    if (heroTitleElement) heroTitleElement.textContent = window.heroData.title;
    if (heroTagNameElement) heroTagNameElement.textContent = window.heroData.tagName;
    if (heroTagActionElement) heroTagActionElement.textContent = window.heroData.tagAction;
}

// Function to render education from data
function renderEducation() {
    const educationTimeline = document.querySelector('.education-timeline');
    if (!educationTimeline) return;
    
    // Clear existing content
    educationTimeline.innerHTML = '';
    
    // Render each education item
    window.educationData.forEach((education, index) => {
        const delay = 100 + (index * 100);
        
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.setAttribute('data-aos', 'fade-up');
        timelineItem.setAttribute('data-aos-delay', delay);
        
        timelineItem.innerHTML = `
            <div class="timeline-date">${education.period}</div>
            <div class="timeline-dot">
                ${education.icon}
            </div>
            <div class="timeline-content">
                <h3>${education.degree}</h3>
                <p>${education.field}</p>
                <div class="institution">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>${education.institution}</span>
                </div>
            </div>
        `;
        
        educationTimeline.appendChild(timelineItem);
    });
}
    
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it to the console and show a success message
            console.log('Form submitted:', { name, email, message });
            
            // Show success message (you could replace this with a more elegant solution)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Initialize AOS (Animate on Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll event listener to handle header styling
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow and reduce padding when scrolling down
        if (scrollTop > 10) {
            header.classList.add('shadow-md');
            header.classList.add('py-2');
            header.classList.remove('py-4');
        } else {
            header.classList.remove('shadow-md');
            header.classList.remove('py-2');
            header.classList.add('py-4');
        }
        
        // Hide header when scrolling down, show when scrolling up
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});
