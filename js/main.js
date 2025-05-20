// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    console.log('Skills data:', window.skillsData);
    console.log('Projects data:', window.projectsData);
    console.log('About data:', window.aboutData);
    console.log('Contact data:', window.contactData);
    console.log('Awards data:', window.awardsData);
    
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
    if (!skillsContainer) return;
    
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
