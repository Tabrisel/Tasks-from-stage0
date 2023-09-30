const clientKey = `z67VJeSqFmgCo8zsUi_Dl-orEyCQyNIXvegOfEcsnNw`;
const box = document.querySelector(".imagesBox");
const array = [];

const getPhoto = async () => {

    const link = `https://api.unsplash.com/photos/random?client_id=${clientKey}&count=30&query=red`;
    const response = await fetch(link);
    const dataInfo = await response.json();{
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






//  const createdImage = document.createElement("img");
// createdImage.classList.add("image-galery");
// createdImage.src="https://images.dog.ceo/breeds/schipperke/n02104365_2981.jpg";
// createdImage.alt="generated_image";
// document.querySelector(".imagesBox").append(createdImage);