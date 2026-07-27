// ======================================================
//                NETFLIX CLONE - SCRIPT.JS
// ======================================================


// ======================================================
//                    MOVIE LIST
// ======================================================

const movies = [

    "movie1.jpg",
    "movie2.jpg",
    "movie3.jpg",
    "movie4.jpg",
    "movie5.jpg",
    "movie6.jpg",
    "movie7.jpg",
    "movie8.jpg",
    "movie9.jpg",
    "movie10.jpg"

];



// ======================================================
//                GET HTML ELEMENTS
// ======================================================

const movieRow = document.getElementById("movieRow");

const leftBtn = document.getElementById("leftBtn");

const rightBtn = document.getElementById("rightBtn");



// ======================================================
//            CREATE MOVIE CARDS DYNAMICALLY
// ======================================================

movies.forEach((movie,index)=>{

    const card = document.createElement("div");

    card.classList.add("movie-card");

    card.innerHTML = `

        <img src="assets/images/${movie}" alt="Movie ${index+1}">

        <span>${index+1}</span>

    `;

    movieRow.appendChild(card);

});



// ======================================================
//            UPDATE SLIDER BUTTONS
// ======================================================

function updateButtons(){

    // Hide left button at beginning

    if(movieRow.scrollLeft <= 5){

        leftBtn.style.display="none";

    }

    else{

        leftBtn.style.display="flex";

    }


    // Hide right button at end

    if(

        movieRow.scrollLeft + movieRow.clientWidth >=
        movieRow.scrollWidth - 5

    ){

        rightBtn.style.display="none";

    }

    else{

        rightBtn.style.display="flex";

    }

}



// ======================================================
//                INITIAL STATE
// ======================================================

updateButtons();



// ======================================================
//                RIGHT BUTTON
// ======================================================

rightBtn.addEventListener("click",()=>{

    movieRow.scrollBy({

        left:800,

        behavior:"smooth"

    });

});



// ======================================================
//                LEFT BUTTON
// ======================================================

leftBtn.addEventListener("click",()=>{

    movieRow.scrollBy({

        left:-800,

        behavior:"smooth"

    });

});



// ======================================================
//            UPDATE WHILE SCROLLING
// ======================================================

movieRow.addEventListener("scroll",updateButtons);



// ======================================================
//                FAQ ACCORDION
// ======================================================

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question=>{

    question.addEventListener("click",()=>{

        const current = question.parentElement;

        document.querySelectorAll(".faq-item").forEach(item=>{

            if(item!==current){

                item.classList.remove("active");

            }

        });

        current.classList.toggle("active");

    });

});



// ======================================================
//                KEYBOARD SUPPORT
// ======================================================

document.addEventListener("keydown",(event)=>{

    if(event.key==="ArrowRight"){

        movieRow.scrollBy({

            left:800,

            behavior:"smooth"

        });

    }

    if(event.key==="ArrowLeft"){

        movieRow.scrollBy({

            left:-800,

            behavior:"smooth"

        });

    }

});



// ======================================================
//            UPDATE AFTER KEYBOARD
// ======================================================

movieRow.addEventListener("scroll",updateButtons);



// ======================================================
//                WINDOW LOAD
// ======================================================

window.onload=()=>{

    updateButtons();

};