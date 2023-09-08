
window.onload = (function () {
    /* достаю нужные элементы */
    let allPagination = document.body.querySelectorAll(".square");

    /* меняем цвета при нажатии кнопок пагинации */
    for (let i = 0; i < allPagination.length; i += 1) {
        allPagination[i].addEventListener("click", () => {
        if (allPagination[i].firstChild.classList.contains("circle")) {
            allPagination[i].firstChild.classList.remove("circle");
            allPagination[i].firstChild.classList.add("sp_circle");
            for (let j = 0; j < allPagination.length; j += 1) {
                if (j != i) {allPagination[j].firstChild.classList.remove("sp_circle");
                allPagination[j].firstChild.classList.add("circle");
            }
            }
        }
    })
}

}());