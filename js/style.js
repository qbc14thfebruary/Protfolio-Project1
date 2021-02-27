// Loading website
var preLoading = document.getElementById('preloading');
function myFuncPreLoading() {
    preLoading.style.display = 'none';
}    
const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
for(let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener('click', function(){
        for(let j = 0;j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active"); 
        }
        this.classList.add("active");
    })
}

// Show hide Menu
const showMenu = document.querySelector('.aside');
function navShowHideMenu(){
    if(showMenu.className === 'aside'){
        showMenu.className += ' show';
    }else {
        showMenu.className ='aside';
    }
}


// Typing 
const texts = ['Designer','Software Developer', 'UX | UI'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function type(){
    if(count === texts.length) {
        count = 0; 
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length ) {
        count++;
        index = 0;
    }
    setTimeout(type, 300)
})();