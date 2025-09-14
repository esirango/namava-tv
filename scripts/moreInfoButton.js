const moreInfoBtn = document.querySelector(".more-info");
const deviceSpecs = document.getElementById("device-specs");

moreInfoBtn.addEventListener("click", () => {
    deviceSpecs.classList.toggle("open");
});
