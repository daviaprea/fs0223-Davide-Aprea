/*SE IL CAROSELLO NON SI SPOSTA DI UN FILM ALLA VOLTA, AGGIORNARE LA PAGINA*/

let row = document.querySelectorAll("section .row");
let arrowBtn=document.querySelectorAll("section .container-fluid i");
let firstCardWidth = document.querySelector("section .row .col").offsetWidth;
let rowChildren=[];
let isDragging=false, startX, startScrollLeft;

/*arrowBtn.forEach((btn, i) => {
    btn.addEventListener("click", ()=>{
        row[Math.floor(i/2)].scrollLeft += btn.classList[2]=="left-arr" ? -firstCardWidth : firstCardWidth;
    });
});*/

arrowBtn.forEach((btn, i) => {
    btn.addEventListener("click", ()=>{

        if(btn.classList[2]=="left-arr")
        {
            row[Math.floor(i/2)].scrollLeft += -firstCardWidth;
            /*row[Math.floor(i/2)].prepend(row[Math.floor(i/2)].children[row[Math.floor(i/2)].children.length-1]);*/
        }

        else
        {
            row[Math.floor(i/2)].scrollLeft += firstCardWidth;
            console.log(row[Math.floor(i/2)].children[0])
            row[Math.floor(i/2)].appendChild(row[Math.floor(i/2)].children[0]);
        }
    });
});