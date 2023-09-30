const clientKey = `z67VJeSqFmgCo8zsUi_Dl-orEyCQyNIXvegOfEcsnNw`;
const box = document.querySelector(".imagesBox");
const array = [];
let link = `https://api.unsplash.com/photos/random?client_id=${clientKey}&count=30&query=red`;

const getPhoto = async () => {

    let response = await fetch(link);
    let dataInfo = await response.json();{
        let array = dataInfo;
        showPictures(array);
        console.log(array);
  
};

    function showPictures(data) {
        data.forEach(pic => {
            let newElement = document.createElement("div");
            newElement.classList.add("createdImage");
            newElement.innerHTML = `<img src="${pic.urls.regular}" alt="generated photo" maxWidth:'300px' maxHeight:'100%'>`;
            box.appendChild(newElement);
            
        });
    }
}

getPhoto();

button.onclick = function () {

    let query = document.getElementById(`search_value`).value;
    box.innerHTML = ``;
    console.log(query);
    link = `https://api.unsplash.com/search/photos?query=${query}&client_id=${clientKey}&per_page=30`;
    function showPictures2(data) {
        data.results.forEach(pic => {
            let newElement = document.createElement("div");
            newElement.classList.add("createdImage");
            newElement.innerHTML = `<img src="${pic.urls.regular}" alt="generated photo" maxWidth:'300px' maxHeight:'100%'>`;
            box.appendChild(newElement);
            
        });
    }
    const getPhoto2 = async () => {

        let response = await fetch(link);
        let dataInfo = await response.json();
            let array = dataInfo;
            showPictures2(array);
            console.log(array);
      
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
