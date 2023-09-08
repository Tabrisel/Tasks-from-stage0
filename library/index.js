
window.onload = (function () {
    let Pagination = document.body.querySelectorAll(".square");
    let pagFirst = document.body.querySelector(".pagFirst");
    let pagSecond = document.body.querySelector(".pagSecond");
    let pagThird = document.body.querySelector(".pagThird");
    let pagFourth = document.body.querySelector(".second_to_last_circle");
    let pagLast = document.body.querySelector(".last_circle");
    let carouselImages = document.body.querySelector(".slider_for_images");
    let leftArrow = document.body.querySelector(".left_arrow");
    let rightArrow = document.body.querySelector(".right_arrow");
    let pagArray = ["pagFirst", "pagSecond", "pagThird", "second_to_last_circle", "last_circle"];
    let numbersForArrow = ["slider_pagFirst", "slider_pagSecond", "slider_pagThird", "slider_pagFourth", "slider_pagLast"];
    

    /* СЛАЙДЕР */
    /* создаем функцию для смены цветов при нажатии кнопок пагинации */
    function changeColorPagination (elem) {
    for (let i = 0; i < elem.length; i += 1) {
        elem[i].addEventListener("click", () => {
        let ourPag = elem;
        if (elem[i].firstChild.classList.contains("circle")) {
            elem[i].firstChild.classList.remove("circle");
            elem[i].firstChild.classList.add("sp_circle");
            for (let j = 0; j < 5; j += 1) {
                if (j != i) {ourPag[j].firstChild.classList.remove("sp_circle");
                ourPag[j].firstChild.classList.add("circle")}}
             }
        })
    }
}

    changeColorPagination(Pagination);
    

        /* создаем события для каждой кнопки слайдера */

        pagFirst.addEventListener("click", () => {
            carouselImages.classList.add("slider_pagFirst");
            carouselImages.classList.remove("slider_pagSecond");
            carouselImages.classList.remove("slider_pagThird");
            carouselImages.classList.remove("slider_pagFourth");
            carouselImages.classList.remove("slider_pagLast");
        })

        pagSecond.addEventListener("click", () => {
            carouselImages.classList.add("slider_pagSecond");
            carouselImages.classList.remove("slider_pagFirst");
            carouselImages.classList.remove("slider_pagThird");
            carouselImages.classList.remove("slider_pagFourth");
            carouselImages.classList.remove("slider_pagLast");
        })

        pagThird.addEventListener("click", () => {
            carouselImages.classList.add("slider_pagThird");
            carouselImages.classList.remove("slider_pagFirst");
            carouselImages.classList.remove("slider_pagSecond");
            carouselImages.classList.remove("slider_pagFourth");
            carouselImages.classList.remove("slider_pagLast");
        })

        pagFourth.addEventListener("click", () => {
            carouselImages.classList.add("slider_pagFourth");
            carouselImages.classList.remove("slider_pagFirst");
            carouselImages.classList.remove("slider_pagSecond");
            carouselImages.classList.remove("slider_pagThird");
            carouselImages.classList.remove("slider_pagLast");
        })

        pagLast.addEventListener("click", () => {
            carouselImages.classList.add("slider_pagLast");
            carouselImages.classList.remove("slider_pagFirst");
            carouselImages.classList.remove("slider_pagSecond");
            carouselImages.classList.remove("slider_pagThird");
            carouselImages.classList.remove("slider_pagFourth");
        })

        const event = new Event("click", {bubbles : true, cancelable : true});

        

        /* создаем слайдер для стрелочек */
        rightArrow.addEventListener("click", () => {
            carouselImages.classList.contains("slider_pagFirst") ? carouselImages.classList.replace("slider_pagFirst", "slider_pagSecond") :
             carouselImages.classList.contains("slider_pagSecond") ? carouselImages.classList.replace("slider_pagSecond", "slider_pagThird") :
             carouselImages.classList.contains("slider_pagThird") ? carouselImages.classList.replace("slider_pagThird", "slider_pagFourth") :
             carouselImages.classList.contains("slider_pagFourth") ? carouselImages.classList.replace("slider_pagFourth", "slider_pagLast") :
             carouselImages.classList.contains("slider_pagLast") ? null :
            carouselImages.classList.add("slider_pagFirst"), carouselImages.classList.replace("slider_pagFirst", "slider_pagSecond");

            checked_left(carouselImages); 
            checked_right(carouselImages); 

            carouselImages.classList.contains("slider_pagFirst") ? pagFirst.dispatchEvent(event) : 
            carouselImages.classList.contains("slider_pagSecond") ? pagSecond.dispatchEvent(event) : 
            carouselImages.classList.contains("slider_pagThird") ? pagThird.dispatchEvent(event) : 
            carouselImages.classList.contains("slider_pagFourth") ? pagFourth.dispatchEvent(event) :
            carouselImages.classList.contains("slider_pagLast") ? pagLast.dispatchEvent(event) : null;

    })


        

        leftArrow.addEventListener("click", () => {
            carouselImages.classList.contains("slider_pagLast") ? carouselImages.classList.replace("slider_pagLast", "slider_pagFourth") :
             carouselImages.classList.contains("slider_pagFourth") ? carouselImages.classList.replace("slider_pagFourth", "slider_pagThird") :
             carouselImages.classList.contains("slider_pagThird") ? carouselImages.classList.replace("slider_pagThird", "slider_pagSecond") :
             carouselImages.classList.contains("slider_pagSecond") ? carouselImages.classList.replace("slider_pagSecond", "slider_pagFirst") :
            carouselImages.classList.contains("slider_pagFirst");

            checked_left(carouselImages);
            checked_right(carouselImages); 

              carouselImages.classList.contains("slider_pagLast") ? pagLast.dispatchEvent(event) : 
              carouselImages.classList.contains("slider_pagFourth") ? pagFourth.dispatchEvent(event) : 
              carouselImages.classList.contains("slider_pagThird") ? pagThird.dispatchEvent(event) : 
              carouselImages.classList.contains("slider_pagSecond") ? pagSecond.dispatchEvent(event) :
              carouselImages.classList.contains("slider_pagFirst") ? pagFirst.dispatchEvent(event) : null;

        })

            /*функции для проверки активности стрелок */
    function checked_left (elem) {
        if (elem.classList.contains("slider_pagFirst")) {
            leftArrow.classList.add("disabled")} else {leftArrow.classList.remove("disabled")}
    }
    checked_left(carouselImages); 

    function checked_right (elem) {
        if (elem.classList.contains("slider_pagLast")) {
            rightArrow.classList.add("disabled")} else {rightArrow.classList.remove("disabled")}
    }
    checked_left(carouselImages); 

}());