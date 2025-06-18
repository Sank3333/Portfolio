
function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}


const sideMenu=document.querySelector('#sideMenu');
const navBar=document.querySelector("nav");
const navLinks=document.querySelector("nav ul");

window.addEventListener('scroll', ()=>{
    if(scrollY>50){
        navBar.classList.add('bg-white', 'shadow-sm', 'backdrop-blur-lg');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    }else{
        navBar.classList.remove('bg-white', 'shadow-sm', 'backdrop-blur-lg');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
})
