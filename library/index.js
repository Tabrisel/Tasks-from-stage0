/*Start Burger*/

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

/* Burger end */


/* Library_part3 - JS */
    let Pagination = document.body.querySelectorAll(".square");
    let pagFirst = document.body.querySelector(".pagFirst");
    let pagSecond = document.body.querySelector(".pagSecond");
    let pagThird = document.body.querySelector(".pagThird");
    let pagFourth = document.body.querySelector(".second_to_last_circle");
    let pagLast = document.body.querySelector(".last_circle");
    let carouselImages = document.body.querySelector(".slider_for_images");
    let leftArrow = document.body.querySelector(".left_arrow");
    let rightArrow = document.body.querySelector(".right_arrow");
   
    let book1 = document.body.querySelector(".image_book_1");
    let book2 = document.body.querySelector(".image_book_2");
    let book3 = document.body.querySelector(".image_book_3");
    let book4 = document.body.querySelector(".image_book_4");
    let winterButton = document.body.querySelector(".wint_text");
    let springButton = document.body.querySelector(".spr_text");
    let summerButton = document.body.querySelector(".sum_text");
    let autumnButton = document.body.querySelector(".aut_text");

    let upperTitle = document.body.querySelectorAll(".upper_title");
    let titleAvtors = document.body.querySelectorAll(".title_f");

    let titlesWint = ["THE BOOK EATERS", "CACKLE", "DANTE: POET OF THE SECULAR WORLD", "THE LAST QUEEN "];
    let titlesAvt_wint = ["By Sunyi Dean", "By Rachel Harrison", "By Erich Auerbach", "By Clive Irving"];
    let titlesSpr = ["The body", "Carry: A Memoir of Survival on Stolen Land", "Days of Distraction", "Dominicana"];
    let titlesAvt_Spr = ["By Stephen King", "By Toni Jenson", "By Alexandra Chang", "By Angie Cruz"];
    let titlesSum = ["Crude: A Memoir", "Let My People Go Surfing", "The Octopus Museum: Poems", "Shark Dialogues: A Novel"];
    let titlesAvt_Sum = ["By Pablo Fajardo & ​​Sophie Tardy-Joubert", "By Yvon Chouinard", "By Brenda Shaughnessy", "By Kiana Davenport"];
    let titlesAut = ["Casual Conversation", "The Great Fire", "Rickey: The Life and Legend", "Slug: And Other Stories"];
    let titlesAvt_Aut = ["By Renia White", "By Lou Ureneck", "By Howard Bryant", "By Megan Milks"];

    let aboutBook = document.body.querySelectorAll(".about_b");
    let blockBooks = document.body.querySelectorAll(".block_for_book");
    let textAboutBook_wint = ["An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.", "Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.", "Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.", "A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them."];
    let textAboutBook_spr = ["Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.", "This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.", "A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.", "A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez."];
    let textAboutBook_sum = ["Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people", "Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.", "This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.", "An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers."];
    let textAboutBook_aut = ["White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity.", "The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide", "With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?", "Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds."];

    

    /* СЛАЙДЕР - КАРУСЕЛЬ */
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

    /* СЛАЙДЕР в блоке favorites*/

    function appearBlock (value) {
    for (let i = 0; i < value.length; i ++ ){
        if (value[i].classList.contains("appear")) {
            value[i].classList.remove("appear");
            value[i].classList.add("appear2");
        } else if (value[i].classList.contains("appear2")) {
            value[i].classList.remove("appear2");
            value[i].classList.add("appear");
    } else {value[i].classList.add("appear")}
    }
}

    /*создадим событие клика для каждого сезона - для картинок */
        winterButton.addEventListener("click", () => {
        book1.classList.remove("display_none");
        document.body.querySelector(".image_book_1_spr").classList.add("display_none");
        document.body.querySelector(".image_book_1_sum").classList.add("display_none");
        document.body.querySelector(".image_book_1_aut").classList.add("display_none");

        book2.classList.remove("display_none");
        document.body.querySelector(".image_book_2_spr").classList.add("display_none");
        document.body.querySelector(".image_book_2_sum").classList.add("display_none");
        document.body.querySelector(".image_book_2_aut").classList.add("display_none");

        book3.classList.remove("display_none");
        document.body.querySelector(".image_book_3_spr").classList.add("display_none");
        document.body.querySelector(".image_book_3_sum").classList.add("display_none");
        document.body.querySelector(".image_book_3_aut").classList.add("display_none");

        book4.classList.remove("display_none");
        document.body.querySelector(".image_book_4_spr").classList.add("display_none");
        document.body.querySelector(".image_book_4_sum").classList.add("display_none");
        document.body.querySelector(".image_book_4_aut").classList.add("display_none");

       
        
            appearBlock(upperTitle);
            appearBlock(titleAvtors);
            appearBlock(aboutBook);
            appearBlock(blockBooks);


        for(let i = 0; i < upperTitle.length; i ++){
            upperTitle[i].textContent = titlesWint[i];
        }   

        for(let i = 0; i < titleAvtors.length; i ++){
            titleAvtors[i].textContent = titlesAvt_wint[i];
        }   

        for(let i = 0; i < aboutBook.length; i ++){
            aboutBook[i].textContent = textAboutBook_wint[i];
        }   

    })

        springButton.addEventListener("click", () => {
        document.body.querySelector(".image_book_1_spr").classList.remove("display_none");
        book1.classList.add("display_none");
        document.body.querySelector(".image_book_1_sum").classList.add("display_none");
        document.body.querySelector(".image_book_1_aut").classList.add("display_none");
        
        document.body.querySelector(".image_book_2_spr").classList.remove("display_none");
        book2.classList.add("display_none");
        document.body.querySelector(".image_book_2_sum").classList.add("display_none");
        document.body.querySelector(".image_book_2_aut").classList.add("display_none");

        document.body.querySelector(".image_book_3_spr").classList.remove("display_none");
        book3.classList.add("display_none");
        document.body.querySelector(".image_book_3_sum").classList.add("display_none");
        document.body.querySelector(".image_book_3_aut").classList.add("display_none");

        document.body.querySelector(".image_book_4_spr").classList.remove("display_none");
        book4.classList.add("display_none");
        document.body.querySelector(".image_book_4_sum").classList.add("display_none");
        document.body.querySelector(".image_book_4_aut").classList.add("display_none");
        
        
        
        appearBlock(upperTitle);
        appearBlock(titleAvtors);
        appearBlock(aboutBook);
        appearBlock(blockBooks);

        for(let i = 0; i < upperTitle.length; i ++){
            upperTitle[i].textContent = titlesSpr[i];
        }     

        for(let i = 0; i < titleAvtors.length; i ++){
            titleAvtors[i].textContent = titlesAvt_Spr[i];
        }   

        for(let i = 0; i < aboutBook.length; i ++){
            aboutBook[i].textContent = textAboutBook_spr[i];
        }   

    })

            summerButton.addEventListener("click", () => {
            document.body.querySelector(".image_book_1_sum").classList.remove("display_none");
            book1.classList.add("display_none");
            document.body.querySelector(".image_book_1_spr").classList.add("display_none");
            document.body.querySelector(".image_book_1_aut").classList.add("display_none");
            
            document.body.querySelector(".image_book_2_sum").classList.remove("display_none");
            book2.classList.add("display_none");
            document.body.querySelector(".image_book_2_spr").classList.add("display_none");
            document.body.querySelector(".image_book_2_aut").classList.add("display_none");
    
            document.body.querySelector(".image_book_3_sum").classList.remove("display_none");
            book3.classList.add("display_none");
            document.body.querySelector(".image_book_3_spr").classList.add("display_none");
            document.body.querySelector(".image_book_3_aut").classList.add("display_none");
    
            document.body.querySelector(".image_book_4_sum").classList.remove("display_none");
            book4.classList.add("display_none");
            document.body.querySelector(".image_book_4_spr").classList.add("display_none");
            document.body.querySelector(".image_book_4_aut").classList.add("display_none");

            appearBlock(upperTitle);
            appearBlock(titleAvtors);
            appearBlock(aboutBook);
            appearBlock(blockBooks);
    

            for(let i = 0; i < upperTitle.length; i ++){
                upperTitle[i].textContent = titlesSum[i];
            }     
    
            for(let i = 0; i < titleAvtors.length; i ++){
                titleAvtors[i].textContent = titlesAvt_Sum[i];
            }   

            for(let i = 0; i < aboutBook.length; i ++){
                aboutBook[i].textContent = textAboutBook_sum[i];
            }   

        })

            autumnButton.addEventListener("click", () => {
            document.body.querySelector(".image_book_1_aut").classList.remove("display_none");
            book1.classList.add("display_none");
            document.body.querySelector(".image_book_1_spr").classList.add("display_none");
            document.body.querySelector(".image_book_1_sum").classList.add("display_none");
            
            document.body.querySelector(".image_book_2_aut").classList.remove("display_none");
            book2.classList.add("display_none");
            document.body.querySelector(".image_book_2_spr").classList.add("display_none");
            document.body.querySelector(".image_book_2_sum").classList.add("display_none");

            document.body.querySelector(".image_book_3_aut").classList.remove("display_none");
            book3.classList.add("display_none");
            document.body.querySelector(".image_book_3_spr").classList.add("display_none");
            document.body.querySelector(".image_book_3_sum").classList.add("display_none");

            document.body.querySelector(".image_book_4_aut").classList.remove("display_none");
            book4.classList.add("display_none");
            document.body.querySelector(".image_book_4_spr").classList.add("display_none");
            document.body.querySelector(".image_book_4_sum").classList.add("display_none");

    

           
            appearBlock(upperTitle);
            appearBlock(titleAvtors);
            appearBlock(aboutBook);
            appearBlock(blockBooks);

            for(let i = 0; i < upperTitle.length; i ++){
                upperTitle[i].textContent = titlesAut[i];
            }     
    
            for(let i = 0; i < titleAvtors.length; i ++){
                titleAvtors[i].textContent = titlesAvt_Aut[i];
            }   

            for(let i = 0; i < aboutBook.length; i ++){
                aboutBook[i].textContent = textAboutBook_aut[i];
            }   
        })


        /* DropMenu */

            const dropMenu = document.querySelector(".dropMenu");
            const icon = document.querySelector(".icon");
            let profile = document.querySelector(".profile");
            
            
            icon.addEventListener("click", () => {
                event.inDropMenu = true;
                dropMenu.classList.add("dropMenu_ON");
                if (event.InMenu = true) {
                document.querySelector(".menu").classList.remove("menu_ON")};
            });
    
        
            document.body.addEventListener("click", event => {

                const outMenu = event.composedPath().includes(dropMenu);
                if (! outMenu) {
                document.querySelector(".dropMenu").classList.remove("dropMenu_ON")
                }
            });

            /*modal_Register*/

            const registerInDropMenu = document.querySelector(".register");
            const blackBox = document.querySelector(".black_box");
            const modalRegisterMenu = document.querySelector(".modalWindowRegister");
            const signUpButtonDigitalCard = document.querySelector(".signUpButton");
            const crossRegister = document.querySelector(".crossRegister");

            registerInDropMenu.addEventListener("click", (event) => {
                modalRegisterMenu.classList.add("modal_ON");
                blackBox.classList.add("modal_ON");}
            )


            blackBox.addEventListener("click", event => {

                const outModalRegister = event.composedPath().includes(modalRegisterMenu);
                if (! outModalRegister) {
                modalRegisterMenu.classList.remove("modal_ON");
                blackBox.classList.remove("modal_ON");
            }
            })


            signUpButtonDigitalCard.addEventListener("click", (event) => {
                modalRegisterMenu.classList.add("modal_ON");
                blackBox.classList.add("modal_ON");
            })

            crossRegister.addEventListener("click", () => {
                modalRegisterMenu.classList.remove("modal_ON");
                blackBox.classList.remove("modal_ON");
            })

            /*Ограничения на поля модального окна register*/
            let SignButton = document.querySelector(".SignUpButton");

       

}());