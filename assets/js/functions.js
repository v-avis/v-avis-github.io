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
