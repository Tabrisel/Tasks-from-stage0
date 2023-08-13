window.onload = (function () {
    const forBurger = document.querySelector(".burger");
    const forMenu = document.querySelector(".menu");
    const forClose = document.querySelector(".cross");
    const forLinks = document.querySelectorAll(".item");
    
    forBurger.addEventListener("click", event => {
        forMenu.classList.add("menu_ON");
        event.InMenu = true;
        document.body.style.overflowY = 'hidden';
    });

    forClose.addEventListener("click", () => {
        forMenu.classList.remove("menu_ON");
        document.body.style.overflowY = 'visible';
    });

    if (window.innerWidth <= 1024) {
        for (let i = 0; i < forLinks.length; i += 1) {
            forLinks[i].addEventListener("click", () => {
                forMenu.classList.remove("menu_ON");
                document.body.style.overflowY = 'visible';
            })
        }
    }

    document.body.addEventListener("click", event => {

        if (event.InMenu) return;
        if (event.target !== forMenu) {
        document.querySelector(".menu").classList.remove("menu_ON")
        document.body.style.overflowY = 'visible'};
    });

}());