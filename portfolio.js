// JavaScript to enhance the performance and interactivity of the portfolio

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Image enhancement - Add a lightbox effect
    const projectImages = document.querySelectorAll("#projects img, #professional-experiences img, #education img");
    projectImages.forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "1000";

            const largeImage = document.createElement("img");
            largeImage.src = img.src;
            largeImage.style.maxWidth = "90%";
            largeImage.style.maxHeight = "90%";
            largeImage.style.border = "5px solid white";
            largeImage.style.borderRadius = "10px";

            overlay.appendChild(largeImage);

            overlay.addEventListener("click", () => {
                document.body.removeChild(overlay);
            });

            document.body.appendChild(overlay);
        });
    });

    // Lazy loading for images to improve performance
    const lazyImages = document.querySelectorAll("img");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });

    // Highlight active section in navigation on scroll
    const sections = document.querySelectorAll("section");
    const observerOptions = {
        threshold: 0.6
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // Button animations
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.2s";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });
});