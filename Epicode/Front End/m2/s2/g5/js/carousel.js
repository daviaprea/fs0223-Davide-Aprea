/*SE IL CAROSELLO NON SI SPOSTA DI UN FILM ALLA VOLTA, AGGIORNARE LA PAGINA*/

let row = document.querySelectorAll("section .row");
let arrowBtn=document.querySelectorAll("section .container-fluid i");
let firstCardWidth = document.querySelector("section .row .col").offsetWidth;
//let rowChildren=[...row.children];
let isDragging=false, startX, startScrollLeft;

arrowBtn.forEach((btn, i) => {
    btn.addEventListener("click", ()=>{
        row[Math.floor(i/2)].scrollLeft += btn.classList[2]=="left-arr" ? -firstCardWidth : firstCardWidth;
    });
});

/*arrowBtn.forEach((btn, i) => {
    btn.addEventListener("click", ()=>{
        if(btn.classList[2]=="left-arr")
        {
            row[Math.floor(i/2)].scrollLeft += -firstCardWidth;
            row.unshift(row.pop());
        }

        else
        {
            row[Math.floor(i/2)].scrollLeft += firstCardWidth;
            row.push(row.shift());
        }
    });
});*/