// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classLists.toggle("nav-active");
        burger.classLists.toggle("toggle-burger");
    });
};

navSlide

// clear form before unload
Window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset()
    }
};