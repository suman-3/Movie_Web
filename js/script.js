//Swiper******
var swiper = new Swiper(".popular-content", {
    slidePerView: 4,
    spaceBetween: 10,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        }

    }

});

// add active color on nav button.................
let btnConatiner = document.getElementById('navbar')
let btns = document.getElementsByClassName('clk')

for (let i=0;i<btns.length;i++){
  btns[i].addEventListener('click', function() {
    let curent = document.getElementsByClassName('active');
    curent[0].className = curent[0].className.replace('active');
    this.className +=" active";
  })
}
//Show Vidio on Button Click
let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myvideo");
let closeButton = document.querySelector(".close-video");

playButton.onclick = () => {
    video.classList.add("show-video")
    //Autoplay when click on button
    myvideo.play();
}
closeButton.onclick = () => {
    video.classList.remove("show-video")
    //Pause on close vidio
    myvideo.pause();
}