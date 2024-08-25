let openMenu=document.querySelector("#menu-bar");
let closeMenu=document.querySelector("#close-menu");
let menu=document.querySelector("#nav-ul")


openMenu.addEventListener("click", openmenu);
closeMenu.addEventListener("click", closemenu);


function openmenu(){
    openMenu.style.display="none";
    closeMenu.style.display="block";
    menu.style.display="flex";
}

function closemenu(){
    openMenu.style.display="block";
    closeMenu.style.display="none";
    menu.style.display="none";
}