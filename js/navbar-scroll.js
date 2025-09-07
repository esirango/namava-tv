let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
