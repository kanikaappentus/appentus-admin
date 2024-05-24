document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    // Function to toggle sidebar and main content classes
    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        mainContent.classList.toggle('shifted');
    }

    // Apply sidebar open state from localStorage on page load
    if (localStorage.getItem('sidebarOpen') === 'true') {
        toggleSidebar(); // Open sidebar
    }

    // Handle sidebar toggle button click
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            toggleSidebar();

            // Save the sidebar state in localStorage
            const isSidebarOpen = sidebar.classList.contains('-translate-x-full') ? 'false' : 'true';
            localStorage.setItem('sidebarOpen', isSidebarOpen);
        });
    } else {
        console.error('Menu button not found');
    }

    // Maintain active link state
    const links = document.querySelectorAll('.sidebar a');

    // Apply active class based on the current URL on page load
    const currentPath = window.location.pathname;
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-link');
        }
    });

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default action to avoid page reload
            event.preventDefault();

            // Remove active class from all links
            links.forEach(l => l.classList.remove('active-link'));

            // Add active class to the clicked link
            this.classList.add('active-link');

            // Close the sidebar after a link is clicked (optional)
            toggleSidebar();

            // Navigate to the new page after a short delay
            const href = this.getAttribute('href');
            setTimeout(() => {
                window.location.href = href;
            }, 300); // Adjust delay if necessary
        });
    });
});
    


function toggleSubItems(id) {
const element = document.getElementById(id);
if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
} else {
    element.classList.add('hidden');
}
}
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar a');

    // Apply active class based on the current URL on page load
    const currentPath = window.location.pathname;
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-link');
            localStorage.setItem('activeLink', link.getAttribute('id'));
        }
    });

    // Apply active class from localStorage on page load
    const activeLinkId = localStorage.getItem('activeLink');
    if (activeLinkId) {
        const activeLink = document.getElementById(activeLinkId);
        if (activeLink) {
            activeLink.classList.add('active-link');
        }
    }

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            links.forEach(l => l.classList.remove('active-link'));
            // Add active class to the clicked link
            this.classList.add('active-link');
            // Store the active link ID in localStorage
            localStorage.setItem('activeLink', this.getAttribute('id'));
        });
    });
});