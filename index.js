
// gallery operations
const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');
const ImageHolder = document.querySelector('.ImageHolder');
const AllImages = ImageHolder.children;

// next image
function NextSlide(){
    let currentImage = document.querySelector('.activeimg')
    let Nextimage = currentImage.nextElementSibling;
    if(Nextimage){
        currentImage.classList.remove('activeimg')
        Nextimage.classList.add('activeimg')
    } else{
        currentImage.classList.remove('activeimg')
        AllImages[0].classList.add('activeimg')
    }

}


window.onload = NextSlide();
setInterval(NextSlide, 5000);
nextbtn.addEventListener('click', NextSlide);


// previous image
function PrevSlide(){
    let currentImage = document.querySelector('.activeimg')
    let PrevImage = currentImage.previousElementSibling;
    if(PrevImage){
        currentImage.classList.remove('activeimg')
        PrevImage.classList.add('activeimg')
    } else{
        currentImage.classList.remove('activeimg')
        ImageHolder.lastElementChild.className = 'activeimg'
    }
}

prevbtn.addEventListener('click', PrevSlide);

// menu manipulation
const menubtn = document.querySelector('.menu');
const nav = document.querySelector('nav');

menubtn.addEventListener('click', ()=>{
    nav.classList.toggle('open')
});