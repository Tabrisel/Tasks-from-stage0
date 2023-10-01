const clientKey = `z67VJeSqFmgCo8zsUi_Dl-orEyCQyNIXvegOfEcsnNw`;
const clientKey2 = `pqNqE1SWigMPrL3AiilXA6sMyByxRnzrskb94BIOV5M`;
const box = document.querySelector(".imagesBox");
const error = document.querySelector(".error");
const array = [];
let link = `https://api.unsplash.com/photos/random?client_id=${clientKey}&count=30&query=autumn&orientation=squarish`;

const getPhoto = async () => {

    try {let response = await fetch(link);
    let dataInfo = await response.json();
        let array = dataInfo;
        error.classList.remove("ON")
        showPictures(array);} catch {error.classList.add("ON")};
  


    function showPictures(data) {
        data.forEach(pic => {
            let newElement = document.createElement("div");
            newElement.classList.add("createdImage");
            newElement.innerHTML = `<img src="${pic.urls.small}" alt="generated photo" width=300 height=300>`;
            box.appendChild(newElement);
            
        });
    }
}

getPhoto();

button.onclick = function () {

    let query = document.getElementById(`search_value`).value;
    box.innerHTML = ``;
    link = `https://api.unsplash.com/search/photos?query=${query}&client_id=${clientKey}&per_page=30&orientation=squarish`;
    function showPictures2(data) {
        data.results.forEach(pic => {
            let newElement = document.createElement("div");
            newElement.classList.add("createdImage");
            newElement.innerHTML = `<img src="${pic.urls.small}" alt="generated photo" width=300 height=300>`;
            box.appendChild(newElement);
            
        });
    }
    const getPhoto2 = async () => {
        
        try{let response = await fetch(link);
        let dataInfo = await response.json();
            let array = dataInfo;
            error.classList.remove("ON")
            showPictures2(array);} catch {
                error.classList.add("ON");
            }
            
      
    };
    getPhoto2();
}

document.querySelector(".box_search").addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // код клавиши Enter
        button.click()
        e.preventDefault();
    }
});
