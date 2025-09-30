// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact form
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent! (Hook up backend later)");
});

// Video play/pause on click
document.querySelectorAll(".project-video").forEach(wrapper => {
    const video = wrapper.querySelector("video");

    wrapper.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            video.controls = true; // show controls when playing
            wrapper.querySelector(".video-overlay").style.display = "none";
        } else {
            video.pause();
            video.controls = false;
            wrapper.querySelector(".video-overlay").style.display = "flex";
        }
    });
});
