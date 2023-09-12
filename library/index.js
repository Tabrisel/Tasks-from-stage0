/*Start Burger*/

window.onload = (function () {
    const forBurger = document.querySelector(".burger");
    const forMenu = document.querySelector(".menu");
    const forClose = document.querySelector(".cross");
    const forLinks = document.querySelectorAll(".item");
    
    forBurger.addEventListener("click", event => {
        forMenu.classList.add("menu_ON");
        event.InMenu = true;
        if (event.inDropMenu = true) {
            dropMenu.classList.remove("dropMenu_ON");
            document.body.style.overflowY = 'hidden';
        }
        if (event.inDropAuth = true) {
            document.querySelector(".dropWithAuth").classList.remove("withAuth_ON");
            document.body.style.overflowY = 'hidden';
        }

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


        /* DropMenu до регистрации/атворизации*/

        const dropMenu = document.querySelector(".dropMenu");
            const icon = document.querySelector(".icon");
            let profile = document.querySelector(".profile");

            
            
            icon.addEventListener("click", (event) => {
                event.inDropMenu = true;
                dropMenu.classList.toggle("dropMenu_ON");
                if (event.InMenu = true) {
                document.querySelector(".menu").classList.remove("menu_ON")};
            });

            document.body.addEventListener("click", event => {

                if (event.inDropMenu) return;
                if (event.target !== dropMenu) {
                document.querySelector(".dropMenu").classList.remove("dropMenu_ON");
                document.body.style.overflowY = 'visible'};
            });

           
            document.querySelector(".dropWithAuth").style.top = "80px";

            /*modal_Register*/

            const registerInDropMenu = document.querySelector(".register");
            const blackBox = document.querySelector(".black_box");
            const modalRegisterMenu = document.querySelector(".modalWindowRegister");
            const signUpButtonDigitalCard = document.querySelector(".signUpButton");
            const crossRegister = document.querySelector(".crossRegister");
            const loginInRegisterMenu = document.querySelector(".Login");

            registerInDropMenu.addEventListener("click", (event) => {
                modalRegisterMenu.classList.add("modal_ON");
                blackBox.classList.add("modal_ON");
                icon.classList.remove("dropMenu_ON");
            }
            )

            loginInRegisterMenu.addEventListener("click", event => {
                modalRegisterMenu.classList.remove("modal_ON");
                blackBox.classList.remove("modal_ON");

                modalLogInMenu.classList.add("modal_ON");
                blackBox2.classList.add("modal_ON");
            })

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
            /* end modal_Register*/

            /* ЕСЛИ ДАННЫЕ В КАРТОЧКЕ СОВПАДУТ С LOCAL STORAGE */
            let formCheckCard = document.querySelector(".form_library");
     
               
                    let CheckedData = document.forms.checkData.onsubmit = function (event) {
                    
                    let full_login = this.readersName.value;
                    let card_c = this.cardReadersNumb.value;
                    console.log(full_login)
                    event.preventDefault();
                   

                for (let i = 0; i < lengthForStorage; i++) {
                value = localStorage.getItem(localStorage.key(i));
                valueParsed = JSON.parse(value);
                card_Registered = localStorage.key(i);
                email = valueParsed["e_mail"];
                visits = valueParsed["Visits"];
                ownBooks = valueParsed["ownBooks"];
                LoginAll = valueParsed["firstName"] + " " + valueParsed["lastName"];
                pas = valueParsed["password"];
                if ((full_login == LoginAll) && (card_c == card_Registered)) {
            
            card = card_Registered;
            card_number = document.querySelector(".cardReadersNumb");
            card_number.value = '';

            card_number.setAttribute("readonly", "");
            card_number.removeAttribute("placeholder");
            card_number.value = card;
            card_number.classList.add(".cardReadersNumb_off");

            login = LoginAll;
            readers_name = document.querySelector(".readersName");
            readers_name.value = '';

            readers_name.setAttribute("readonly", "");
            readers_name.removeAttribute("placeholder");
            readers_name.value = login;
            card_number.classList.add(".cardReadersNumb_off");

            document.querySelector(".icons_profile").classList.add("icons_ON");
            let visits_count = document.querySelectorAll(".visits");
            for(let i =0; i < visits_count.length; i++)
            { visits_count[i].innerHTML = visits};
            let books_count = document.querySelectorAll(".ownBookss");
            for(let i =0; i < visits_count.length; i++) {books_count[i].innerHTML = ownBooks};
            document.querySelector(".check_card").style.display = "none";
            document.querySelector(".cardReadersNumb").style.color = "rgba(187, 148, 95, 1)";
            document.querySelector(".readersName").style.color = "rgba(187, 148, 95, 1)";
            

            setTimeout(() => {
            card_number.value = '';

            card_number.removeAttribute("readonly", "");
            card_number.setAttribute("placeholder", "Card number");
            card_number.classList.remove(".cardReadersNumb_off");

            readers_name.value = '';

            readers_name.removeAttribute("readonly", "");
            readers_name.setAttribute("placeholder", "Reader's name" );

            card_number.classList.remove(".cardReadersNumb_off");

            document.querySelector(".icons_profile").classList.remove("icons_ON");
 
            document.querySelector(".check_card").style.display = "block";
            document.querySelector(".cardReadersNumb").style.color = "#565656";
            document.querySelector(".readersName").style.color = "#565656";




  },
  10 * 1000
             )} else {event.preventDefault()}
            }
    }


            /* КОНЕЦ ПРО КАРТОЧКУ CHECK THE CARD */



            /* start modal LOGIN */

            const blackBox2 = document.querySelector(".black_box_WindowLogin");
            const modalLogInMenu = document.querySelector(".modalWindowLogIn");
            const logInButtonDigitalCard = document.querySelector(".logInButton");
            const crossLogin = document.querySelector(".crossLog");
            const loginInDropMenu = document.querySelector(".Log_In");
            const registerInLogMenu = document.querySelector(".register_pl");

            loginInDropMenu.addEventListener("click", (event) => {
                modalLogInMenu.classList.add("modal_ON");
                blackBox2.classList.add("modal_ON");}
            )

            registerInLogMenu.addEventListener("click", event => {
                modalLogInMenu.classList.remove("modal_ON");
                blackBox2.classList.remove("modal_ON");

                modalRegisterMenu.classList.add("modal_ON");
                blackBox.classList.add("modal_ON");
            })


            blackBox2.addEventListener("click", event => {

                const outModalLogin = event.composedPath().includes(modalLogInMenu);
                if (! outModalLogin) {
                 modalLogInMenu.classList.remove("modal_ON");
                blackBox2.classList.remove("modal_ON");
            }
            })


            logInButtonDigitalCard.addEventListener("click", (event) => {
                modalLogInMenu.classList.add("modal_ON");
                blackBox2.classList.add("modal_ON");
            })

            crossLogin.addEventListener("click", () => {
                modalLogInMenu.classList.remove("modal_ON");
                blackBox2.classList.remove("modal_ON");
            })


            /* end modal LOGIN */

            /*Сохранение данных в localstorage*/

            const form = document.querySelector(".modalWindowRegister");
            let first_name = form.querySelector('[name="first_n"]');
            let last_name = document.querySelector('[name="last_n"]');;
            let mail = document.querySelector('[name="mail"]');
            let password = document.querySelector('[name="pass"]');
            let cardNumber;
            let authorize_status = false;

            function dataFunction(event) {
            

            const data_values = {
                "firstName": first_name.value,
                "lastName": last_name.value,
                "e_mail": mail.value,
                "password": password.value,
                "ownBooks": "0",
                "authorizeStatus" : "true",
                "Visits" : "1",
                "BuyLibraryCard" : "No",
            }

            let cardnumb = Math.random().toString(16).slice(-9);
            let cardNumber = cardnumb.toUpperCase();
            localStorage.setItem(`${cardNumber}`, JSON.stringify(data_values));

            /*Меняем внешний вид при первичной регистрации*/
            icon.classList.add("icon_after_registr");
            document.querySelector(".check_card").classList.add("check_card_after_registr");
            document.querySelector(".two_buttons").style="display:none";
            document.querySelector(".get_arc").innerHTML = "Visit your profile";
            document.querySelector(".ywba").innerHTML = "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.";
            document.querySelector(".get_a_card").style="justify-content: normal";
            document.querySelector(".for_profile").classList.remove("for_profile");

            let card = cardNumber;
            let card_number = document.querySelector(".cardReadersNumb");

            card_number.setAttribute("readonly", "");
            card_number.removeAttribute("placeholder");
            card_number.setAttribute("placeholder", card);
            card_number.classList.add(".cardReadersNumb_off");

            let login = JSON.parse(window.localStorage[card]);
            let readers_name = document.querySelector(".readersName");
            let loginReady = login["firstName"] + " " + login["lastName"];

            readers_name.setAttribute("readonly", "");
            readers_name.removeAttribute("placeholder");
            readers_name.setAttribute("placeholder", loginReady);
            card_number.classList.add(".cardReadersNumb_off");


            let firstchar = login["firstName"][0];
            let secondchar = login["lastName"][0];
            let logo_foricon = firstchar + secondchar;
            icon.insertAdjacentHTML('beforeend', logo_foricon);

            document.querySelector(".icons_profile").classList.add("icons_ON");
            let visits_count = document.querySelectorAll(".visits");
            for(let i =0; i < visits_count.length; i++)
            { visits_count[i].innerHTML = visits};
            let books_count = document.querySelectorAll(".ownBookss");
            for(let i =0; i < visits_count.length; i++) {books_count[i].innerHTML = ownBooks};
            document.querySelector(".icon").setAttribute("title", loginForTitle);
            
        }

            form.addEventListener("submit", dataFunction);

            /*Проверяем есть ли у кого-либо из пользователей статус авторизации и пр*/

            let valueParsed;
            let card_Registered;
            let authorize;
            let login_Registered;
            let first_char;
            let second_char;
            let readers_name;
            let BuyCard;
            let email;
            let passw;
            let ownBooks;
            let visits;
            let fName;
            let lName;
            let loginForTitle;
            const lengthForStorage = localStorage.length;
            for (let i = 0; i < lengthForStorage; i++) {
                let value = localStorage.getItem(localStorage.key(i));
                valueParsed = JSON.parse(value);
                authorize_status = valueParsed["authorizeStatus"];
                if (authorize_status == "true") {
                card_Registered = localStorage.key(i);
                authorize = authorize_status;
                first_char = valueParsed["firstName"][0];
                second_char = valueParsed["lastName"][0];
                fName = valueParsed["firstName"];
                lName = valueParsed["lastName"];
                loginForTitle = valueParsed["firstName"] + " " + valueParsed["lastName"];
                login_Registered = first_char + " " + second_char;
                BuyCard = valueParsed["BuyLibraryCard"];
                email = valueParsed["e_mail"];
                passw = valueParsed["password"];
                ownBooks = valueParsed["ownBooks"];
                visits = valueParsed["Visits"];
                }
            }



            /*Если жертва есть и она не разлогинилась - меняем внешний вид как при авторизации*/
            if (authorize === "true") {

            /*стандартные изменения*/
            icon.classList.add("icon_after_registr");
            document.querySelector(".check_card").classList.add("check_card_after_registr");
            document.querySelector(".two_buttons").style="display:none";
            document.querySelector(".get_arc").innerHTML = "Visit your profile";
            document.querySelector(".ywba").innerHTML = "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.";
            document.querySelector(".get_a_card").style="justify-content: normal";
            document.querySelector(".for_profile").classList.remove("for_profile");
            document.querySelector(".icons_profile").classList.add("icons_ON");
            let visits_count = document.querySelectorAll(".visits");
            for(let i =0; i < visits_count.length; i++)
            { visits_count[i].innerHTML = visits};
            let books_count = document.querySelectorAll(".ownBookss");
            for(let i =0; i < visits_count.length; i++) {books_count[i].innerHTML = ownBooks};
            document.querySelector(".icon").setAttribute("title", loginForTitle);
            document.querySelector(".dropWithAuth").style.top = "80px";

            /* присваиваем значения из хранилища  - номер карточки*/
            let card = card_Registered;
            let card_number = document.querySelector(".cardReadersNumb");

            card_number.setAttribute("readonly", "");
            card_number.removeAttribute("placeholder");
            card_number.setAttribute("placeholder", card);
            card_number.classList.add(".cardReadersNumb_off");

            /* присваиваем значения из хранилища  - имена*/
            readers_name = document.querySelector(".readersName");
            readers_name.setAttribute("readonly", "");
            readers_name.removeAttribute("placeholder");
            readers_name.setAttribute("placeholder", loginForTitle);
            card_number.classList.add(".cardReadersNumb_off");

            let logo_foricon = first_char + second_char;
            document.querySelector(".name_icon").textContent = logo_foricon;

            /*занимаемся блокированием DropMenu после авторизации*/
            icon.addEventListener("click", () => {
                dropMenu.classList.remove("dropMenu_ON")
            })
            
            /* добавляем возможность появления другого меню */
            let dropWithAuth = document.querySelector(".dropWithAuth");
            icon.addEventListener("click", event => {
                event.inDropAuth = true;
                dropWithAuth.classList.toggle("withAuth_ON");

                document.body.addEventListener("click", event => {

                    if (event.inDropAuth) return;
                    if (event.target !== dropWithAuth) {
                    document.querySelector(".dropWithAuth").classList.remove("withAuth_ON");
                    document.body.style.overflowY = 'visible'};
                });


            })
                
            /* Добавляем изменение в окошечке меню - теперь вместо profile = card_number */
            let profileForSmallWindow = document.querySelector(".profile_data");
            profileForSmallWindow.innerHTML = card;
    
            /* включаем возможность покупки libraryCard */
            const blackBoxWindowBuyLibrary = document.querySelector(".black3box");
            const windowBuyLibrary = document.querySelector(".WindowBuyCard");

            const buy_buttons = document.querySelectorAll(".buy");
            for (let i = 0; i < buy_buttons.length; i ++)
            buy_buttons[i].addEventListener("click", () => {
            blackBoxWindowBuyLibrary.classList.add("modal_ON");
            windowBuyLibrary.classList.add("modal_ON");
            })

            /* если человек нажал submit -> купил карту = присваиваем значение покупки карты 
            теперь у нас BuyLibraryCard = true */

            const form2 = document.querySelector(".WindowBuyCard");
            form2.addEventListener("submit", () => {
                BuyCard = "Yes";
                const data_values2 = {
                    "firstName": fName,
                    "lastName": lName,
                    "e_mail": email,
                    "password": passw,
                    "ownBooks": ownBooks,
                    "authorizeStatus" : authorize,
                    "Visits" : visits,
                    "BuyLibraryCard" : BuyCard,
                }
                localStorage.setItem(`${card_Registered}`, JSON.stringify(data_values2));

            })

            /* добавляем события для закрытия окошка BuyLibraryCard */
            
        
            const crossbuyCard = document.querySelector(".crossBuyCard");

            blackBoxWindowBuyLibrary.addEventListener("click", (event) => {

                const outModalBuyCard = event.composedPath().includes(windowBuyLibrary);
                if (! outModalBuyCard) {
                blackBoxWindowBuyLibrary.classList.remove("modal_ON");
                windowBuyLibrary.classList.remove("modal_ON");
            }
            })

            crossbuyCard.addEventListener("click", () => {
                blackBoxWindowBuyLibrary.classList.remove("modal_ON");
                windowBuyLibrary.classList.remove("modal_ON");
            })


            /*Если у человека куплена карта - ее больше не показываем и даем покупать книги*/
            if (BuyCard === "Yes") {const buy_buttons = document.querySelectorAll(".buy");
            for (let i = 0; i < buy_buttons.length; i ++)
            buy_buttons[i].addEventListener("click", (event) => {
                blackBoxWindowBuyLibrary.classList.remove("modal_ON");
                windowBuyLibrary.classList.remove("modal_ON");
            })}

            /*Присвоим данные для ProfileCard*/

            const pictureID = document.querySelector(".avatarUser");
            const fullName = document.querySelector(".allUserName");
            const abonement = document.querySelector(".NumberOfAuthorize");
            const copyIcon = document.querySelector(".copyIcon");
            const profileButton = document.querySelector(".my_profile");
            const blBoxProfileModal = document.querySelector(".blBoxProfileModal");
            const crossProfileCard = document.querySelector(".crossProfileCard");
            const WindowProfileCard = document.querySelector(".profileModalWindow");
            const buttonVisit = document.querySelector(".letsprofile");


            pictureID.textContent = logo_foricon;
            fullName.textContent = loginForTitle;
            abonement.textContent = card;
            
            /* добавим возможность сохранять карту в буфер обмена*/
            copyIcon.addEventListener('click', function(e) {
                navigator.clipboard.writeText(card);
             });

            /*добавим возможность открывать profile Card */
            profileButton.addEventListener("click", function() {
                WindowProfileCard.classList.add("modal_ON");
                blBoxProfileModal.classList.add("modal_ON");
            })

            buttonVisit.addEventListener("click", function() {
                WindowProfileCard.classList.add("modal_ON");
                blBoxProfileModal.classList.add("modal_ON");
            })

            blBoxProfileModal.addEventListener("click", event => {

                const outModalProfile = event.composedPath().includes(WindowProfileCard);
                if (! outModalProfile) {
                    WindowProfileCard.classList.remove("modal_ON");
                    blBoxProfileModal.classList.remove("modal_ON");
                }
            })

            crossProfileCard.addEventListener("click", () => {
                WindowProfileCard.classList.remove("modal_ON");
                blBoxProfileModal.classList.remove("modal_ON");
            })




            /* ЕСЛИ ХОТИМ ВЫЙТИ ИЗ АВТОРИЗАЦИИ */
            const logOutButton = document.querySelector(".LogOut");
            logOutButton.addEventListener("click", () => {
                
                    authorize = "false";
                    const data_values3 = {
                        "firstName": fName,
                        "lastName": lName,
                        "e_mail": email,
                        "password": passw,
                        "ownBooks": ownBooks,
                        "authorizeStatus" : authorize,
                        "Visits" : visits,
                        "BuyLibraryCard" : BuyCard,
                    }
                    localStorage.setItem(`${card_Registered}`, JSON.stringify(data_values3));
                    location.reload()         
            })

    }

            /* ЕСЛИ АВТОРИЗАЦИИ НЕТ */
        else {
                const buy_buttons = document.querySelectorAll(".buy");
                for (let i = 0; i < buy_buttons.length; i ++) {
                buy_buttons[i].addEventListener("click", () => {
                modalLogInMenu.classList.add("modal_ON");
                blackBox2.classList.add("modal_ON")})}



                /* ХОТИМ ВОЙТИ В АККАУНТ */

      
                
                let formLog = document.querySelector(".modalWindowLogIn");
     
               
                    let CheckedMailLogoPassw = document.forms.checked.onsubmit = function () {
                    let mail_logo = this.login_log.value;
                    let passw_c = this.passw_log.value;
                   

                const lengthForStorage = localStorage.length;
                for (let i = 0; i < lengthForStorage; i++) {
                let value = localStorage.getItem(localStorage.key(i));
                valueParsed = JSON.parse(value);
                card_Registered = localStorage.key(i);
                email = valueParsed["e_mail"];
                pas = valueParsed["password"];
                visit = +valueParsed["Visits"] + 1;
                if ((card_Registered == mail_logo)|| ((email == mail_logo))) {
                if (pas == passw_c) {
                    const data_values4 = {
                        "firstName": valueParsed["firstName"],
                        "lastName": valueParsed["lastName"],
                        "e_mail": valueParsed["e_mail"],
                        "password": valueParsed["password"],
                        "ownBooks": valueParsed["ownBooks"],
                        "authorizeStatus" : "true",
                        "Visits" : visit,
                        "BuyLibraryCard" : valueParsed["BuyLibraryCard"],
                    }
                    localStorage.setItem(`${card_Registered}`, JSON.stringify(data_values4));
                    location.reload();
                }} else {null}

            }
        
        } 
    
    }

    
                    



                  

                







            


          

}());