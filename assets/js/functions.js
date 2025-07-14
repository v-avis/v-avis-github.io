document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header-container"); 
    const stickyClass = "stuck"; // The class to add when stuck

    function checkScroll() {
        if (window.scrollY > 0) {
            header.classList.add(stickyClass);
        } else {
            header.classList.remove(stickyClass);
        }
    }

    window.addEventListener("scroll", checkScroll);
});

function toggleArchives() {
    const archiveContent = document.getElementById('archive-content');
    const toggleText = document.getElementById('toggle-text');
    
    if (archiveContent.classList.contains('show')) {
        archiveContent.classList.remove('show');
        toggleText.textContent = 'Show Archives';
    } else {
        archiveContent.classList.add('show');
        toggleText.textContent = 'Hide Archives';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Target all links within the archive content
    const archiveLinks = document.querySelectorAll('.archive-content a');
    archiveLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Target all links within the thinking and doing sections
    const links = document.querySelectorAll('.thinking-things a, .doing-things a');
    links.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});