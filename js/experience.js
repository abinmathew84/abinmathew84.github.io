document.addEventListener('DOMContentLoaded', function() {
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
});
