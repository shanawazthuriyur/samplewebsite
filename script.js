/*=================================
IMAGE SLIDER
==================================*/

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

/* Next Button */

next.addEventListener("click", ()=>{

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);
});

/* Previous Button */

prev.addEventListener("click", ()=>{

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);
});

/* Auto Slide */

setInterval(()=>{

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

},5000);


/*=================================
MOBILE MENU
==================================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", ()=>{

    nav.classList.toggle("show");

});


/*=================================
SMOOTH SCROLL
==================================*/

document.querySelectorAll('nav a').forEach(link=>{

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        target.scrollIntoView({
            behavior:'smooth'
        });

        nav.classList.remove("show");

    });

});


/*=================================
COUNTER ANIMATION
==================================*/

const counters = document.querySelectorAll(".count");

const speed = 200;

counters.forEach(counter=>{

    const updateCount = ()=>{

        const target = +counter.innerText;

        const count = +counter.getAttribute("data-count") || 0;

        const increment = target / speed;

        if(count < target){

            counter.setAttribute(
                "data-count",
                Math.ceil(count + increment)
            );

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCount,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCount();

});


/*=================================
HEADER SCROLL EFFECT
==================================*/

window.addEventListener("scroll", ()=>{

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "#081c3a";

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.2)";

    }
    else{

        header.style.background =
        "rgba(8,28,58,.92)";

        header.style.boxShadow = "none";

    }

});


/*=================================
GALLERY LIGHTBOX
==================================*/

const galleryImages =
document.querySelectorAll(".gallery img");

galleryImages.forEach(img=>{

    img.addEventListener("click", ()=>{

        const lightbox =
        document.createElement("div");

        lightbox.id = "lightbox";

        document.body.appendChild(lightbox);

        const image =
        document.createElement("img");

        image.src = img.src;

        lightbox.appendChild(image);

        lightbox.addEventListener("click", ()=>{

            lightbox.remove();

        });

    });

});


/*=================================
LIGHTBOX STYLE
==================================*/

const style =
document.createElement("style");

style.innerHTML = `

#lightbox{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.9);
display:flex;
justify-content:center;
align-items:center;
z-index:99999;
}

#lightbox img{
max-width:90%;
max-height:85%;
border-radius:15px;
box-shadow:0 0 30px #000;
}

`;

document.head.appendChild(style);


/*=================================
CONTACT FORM
==================================*/

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
        "Thank you! Your message has been sent."
    );

    form.reset();

});


/*=================================
LOADING ANIMATION
==================================*/

window.addEventListener("load", ()=>{

    document.body.classList.add("loaded");

});


/*=================================
SCROLL REVEAL
==================================*/

const reveals =
document.querySelectorAll(
".card,.project,.gallery img"
);

window.addEventListener("scroll", ()=>{

    reveals.forEach(item=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            item.classList.add("fade-up");

        }

    });

});