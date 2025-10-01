// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
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

// ✅ Correct: select by class
const resumeBtn = document.querySelector(".resume-btn");

resumeBtn.addEventListener("click", (e) => {
    // Optional: force download instead of opening
    e.preventDefault();
    window.open("./assets/CV_YenPhan.pdf", "_blank");
});

