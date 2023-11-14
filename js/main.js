/*************** 
    CODE CAROUSEL
***************/

const images = [
    {
      image: 'img/01.webp',
      title: "Marvel's Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
];

const jumboFilm = document.getElementById('jumbo_film');
const filmAside = document.getElementById('film_aside');
let imgEl="";
let titleEl="";
let textEl="";
let selected="";

for(const picture of images){
    
    active = picture == images[0] ? 'active' : ''; 
    selected = picture == images[0] ? 'selected' : '';
    
    for(const attribute in picture){
        
        imgEl = picture.image;
        titleEl= picture.title;
        textEl= picture.text;
        
        
    }

    const jumboEl = `
    <div class="card ${active}">
        <img src="${imgEl}" alt=""> 
        <div class="caption pe-4">               
            <h4 id="title_picture">${titleEl}</h4>
            <p id="text_picture">${textEl}</p>
        </div>
    </div>`
    
    
    const asideEl = 
    `<div class="picture_film">
        <img src="${imgEl}" alt="">
        <div class="border ${selected}">
        </div>
    </div>`
    
    jumboFilm.innerHTML += jumboEl;
    filmAside.innerHTML += asideEl;
    
}

const buttonUp = document.getElementById('button_up');
const buttonDown = document.getElementById('button_down');
const buttonPlay = document.getElementById('player_play');
const buttonStop = document.getElementById('stop');
const buttonPlayBackwards = document.getElementById('play_backwards');
const timeBar = document.getElementById('progressive_bar');
const pictures = document.querySelectorAll('.card');
const asidePictures = document.querySelectorAll('.border');
let activeSilde = 0;
let activeBorder = 0;

buttonUp.addEventListener('click', function(){
     
    activeSilde = buttonCarosel(activeSilde, pictures, true, 'active');
    activeBorder = buttonCarosel(activeBorder, asidePictures, true, 'selected');
    
})

buttonDown.addEventListener('click', function(){
    
    activeSilde = buttonCarosel(activeSilde, pictures, false, 'active');
    activeBorder = buttonCarosel(activeBorder, asidePictures, false, 'selected');
    
})

let playButton;

buttonPlay.addEventListener('click', function(){
    
    buttonPlay.classList.add('d-none');
    buttonPlayBackwards.classList.add('d-none');
    buttonStop.classList.remove('d-none');
    timeBar.classList.add('play')  
    activeSilde = buttonCarosel(activeSilde, pictures, false, 'active'); 
    activeBorder = buttonCarosel(activeBorder, asidePictures, false, 'selected');

    playButton = setInterval(function(){

        activeSilde = buttonCarosel(activeSilde, pictures, false, 'active');
        activeBorder = buttonCarosel(activeBorder, asidePictures, false, 'selected');  

    }, 3000)
})

buttonPlayBackwards.addEventListener('click', function(){
    
    buttonPlay.classList.add('d-none');
    buttonPlayBackwards.classList.add('d-none');
    buttonStop.classList.remove('d-none');
    timeBar.classList.add('play')
    activeSilde = buttonCarosel(activeSilde, pictures, true, 'active');
    activeBorder = buttonCarosel(activeBorder, asidePictures, true, 'selected');
    
    playButton = setInterval(function(){
        
        activeSilde = buttonCarosel(activeSilde, pictures, true, 'active');
        activeBorder = buttonCarosel(activeBorder, asidePictures, true, 'selected');  
        
    }, 3000)
})

buttonStop.addEventListener('click', function(){ 

    timeBar.classList.remove('play')
    clearInterval(playButton)
    clearInterval(buttonPlayBackwards)
    buttonPlay.classList.remove('d-none');
    buttonPlayBackwards.classList.remove('d-none');
    buttonStop.classList.add('d-none');

})

function buttonCarosel(activeIndex, listEl, boolean, className){

    listEl[activeIndex].classList.remove(className)
    boolean ? activeIndex-- : activeIndex++

    if(activeIndex == listEl.length) activeIndex = 0;
    if(activeIndex < 0) activeIndex = listEl.length -1

    let newActiveIndex = listEl[activeIndex]

    newActiveIndex.classList.add(className)

    return activeIndex;
   
}