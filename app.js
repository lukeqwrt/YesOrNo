const no_trigger = document.querySelector('#no_trigger');
const frog = document.querySelector('#frog');
const kirmit = document.querySelector('#kirmit');
const cat = document.querySelector('#cat');
const pls = document.querySelector('.pls_wrapper');
const audio = document.querySelector('#audio');

let count = 0;

// Play song
function playSong() {
    audio.classList.add('play');
  }


no_trigger.addEventListener('click', () => {
    // playSong()
    no_trigger.style.position = "fixed"
    no_trigger.style.bottom = Math.floor(Math.random()*60)+'%';
    no_trigger.style.left = Math.floor(Math.random()*60)+'%';
    count++
    if(count == 2){
        frog.style.visibility = "visible"
        frog.style.opacity = "1"

            audio.play();

        
    }else if(count == 3){
        cat.style.visibility = "visible"
        cat.style.opacity = "1"
    }else if(count == 4){
        kirmit.style.visibility = "visible"
        kirmit.style.opacity = "1"

        pls.style.display = "flex"
     
    }else if(count > 4){
        var spanContent = document.createElement('span')
        spanContent.innerHTML = 'Please? T_T';
        pls.appendChild(spanContent)
    }

    
})