/* =========================
   SECRET MESSAGE REVEAL
========================= */

const revealBtn =
document.getElementById("revealMessageBtn");

const secretText =
document.getElementById("secretText");

if(revealBtn){

    revealBtn.addEventListener("click",()=>{

        secretText.style.display = "block";

        revealBtn.style.display = "none";

    });

}

/* =========================
   PHOTO SLIDER
========================= */

const slides =
document.querySelectorAll(".slide");

const dots =
document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    slides[index].classList.add("active");

    if(dots[index]){

        dots[index].classList.add("active");

    }

}

const nextBtn =
document.querySelector(".nextBtn");

const prevBtn =
document.querySelector(".prevBtn");

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        currentSlide++;

        if(currentSlide >= slides.length){

            currentSlide = 0;

        }

        showSlide(currentSlide);

    });

}

if(prevBtn){

    prevBtn.addEventListener("click",()=>{

        currentSlide--;

        if(currentSlide < 0){

            currentSlide =
            slides.length - 1;

        }

        showSlide(currentSlide);

    });

}

/* Auto Slide */

setInterval(()=>{

    if(slides.length > 0){

        currentSlide++;

        if(currentSlide >= slides.length){

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }

},5000);

/* =========================
   MEMORY QUIZ
========================= */

const quizButtons =
document.querySelectorAll(
"#memory-quiz button"
);

const quizResult =
document.querySelector(".quiz-result");

quizButtons.forEach((btn,index)=>{

    btn.addEventListener("click",()=>{

        if(index === 0){

            quizResult.innerHTML =
            "💜 Correct Answer!";

        }

        else{

            quizResult.innerHTML =
            "❌ Try Again";

        }

    });

});
/* =========================
   COUNTDOWN TO 25 MARCH
========================= */

function updateCountdown(){

    const today = new Date();

    let year = today.getFullYear();

    let anniversary =
    new Date(year, 2, 25); // March = 2

    if(today > anniversary){

        anniversary =
        new Date(year + 1, 2, 25);

    }

    const diff =
    anniversary - today;

    const days =
    Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
        (diff / (1000 * 60 * 60)) % 24
    );

    const minutes =
    Math.floor(
        (diff / (1000 * 60)) % 60
    );

    const seconds =
    Math.floor(
        (diff / 1000) % 60
    );

    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");

    if(d) d.innerHTML = days;
    if(h) h.innerHTML = hours;
    if(m) m.innerHTML = minutes;
    if(s) s.innerHTML = seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();

/* =========================
   SCRATCH CARD
========================= */

const scratchCover =
document.getElementById("scratchCover");

if(scratchCover){

    let scratches = 0;

    scratchCover.addEventListener("mousemove",()=>{

        scratches++;

        scratchCover.style.opacity =
        1 - scratches / 80;

        if(scratches > 80){

            scratchCover.style.display =
            "none";

        }

    });

    scratchCover.addEventListener("touchmove",()=>{

        scratches++;

        scratchCover.style.opacity =
        1 - scratches / 80;

        if(scratches > 80){

            scratchCover.style.display =
            "none";

        }

    });

}

/* =========================
   CELEBRATION BUTTON
========================= */

const celebrateBtn =
document.getElementById("celebrateBtn");

if(celebrateBtn){

    celebrateBtn.addEventListener("click",()=>{

        alert(
        "🎉 Happy Anniversary! 💜\n\nThank you for an amazing year together."
        );

    });

}

/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add(
    "floating-heart"
    );

    const hearts =
    ["💜","💕","💖","💗","❤️"];

    heart.innerHTML =
    hearts[
        Math.floor(
            Math.random() * hearts.length
        )
    ];

    heart.style.left =
    Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,1200);
/* =========================
   TYPEWRITER EFFECT
========================= */

const typewriter =
document.getElementById("typewriter");

if(typewriter){

    const text =
    typewriter.innerHTML;

    typewriter.innerHTML = "";

    let i = 0;

    function typeEffect(){

        if(i < text.length){

            typewriter.innerHTML +=
            text.charAt(i);

            i++;

            setTimeout(typeEffect,40);

        }

    }

    typeEffect();

}

/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(
"section,.timeline-card,.gallery-card,.moment-card,.quote-card"
);

function revealOnScroll(){

    revealElements.forEach(el=>{

        const top =
        el.getBoundingClientRect().top;

        const visible =
        window.innerHeight - 100;

        if(top < visible){

            el.style.opacity = "1";
            el.style.transform =
            "translateY(0)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity = "0";
    el.style.transform =
    "translateY(50px)";

    el.style.transition =
    "all .8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* =========================
   FIREWORKS EFFECT
========================= */

function launchFirework(){

    const firework =
    document.createElement("div");

    firework.innerHTML = "🎆";

    firework.style.position =
    "fixed";

    firework.style.left =
    Math.random() * 100 + "vw";

    firework.style.top =
    Math.random() * 50 + "vh";

    firework.style.fontSize =
    "50px";

    firework.style.zIndex =
    "9999";

    document.body.appendChild(
    firework
    );

    setTimeout(()=>{

        firework.remove();

    },1500);

}

const celebrateButton =
document.getElementById(
"celebrateBtn"
);

if(celebrateButton){

    celebrateButton.addEventListener(
    "click",
    ()=>{

        for(let i=0;i<25;i++){

            setTimeout(()=>{

                launchFirework();

            },i*150);

        }

    });

}

/* =========================
   SMOOTH BUTTON SCROLL
========================= */

const journeyBtn =
document.getElementById(
"journeyBtn"
);

if(journeyBtn){

    journeyBtn.addEventListener(
    "click",
    ()=>{

        document
        .getElementById("timeline")
        ?.scrollIntoView({

            behavior:"smooth"

        });

    });

}

const galleryBtn =
document.getElementById(
"galleryBtn"
);

if(galleryBtn){

    galleryBtn.addEventListener(
    "click",
    ()=>{

        document
        .getElementById("memory-gallery")
        ?.scrollIntoView({

            behavior:"smooth"

        });

    });

}

/* =========================
   RANDOM LOVE QUOTES
========================= */

const quotes = [

"💜 Every memory with you is special.",
"💕 Thank you for an amazing year.",
"💖 My favorite story is ours.",
"🌸 One year down, forever to go.",
"✨ You make ordinary moments magical."

];

setInterval(()=>{

    const quoteBox =
    document.getElementById(
    "quoteOfDay"
    );

    if(quoteBox){

        quoteBox.innerHTML =
        quotes[
        Math.floor(
        Math.random() *
        quotes.length
        )
        ];

    }

},5000);

/* =========================
   WEBSITE LOADED
========================= */

window.addEventListener(
"load",
()=>{

    console.log(
    "💜 Anniversary Website Loaded Successfully"
    );

});