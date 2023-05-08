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

row.forEach(r=>rowChildren.push([...r.children]));

console.log(rowChildren[0][0]);

arrowBtn.forEach((btn, i) => {
    btn.addEventListener("click", ()=>{
        if(btn.classList[2]=="left-arr")
        {
            //rowChildren[Math.floor(i/2)].unshift(rowChildren[Math.floor(i/2)].pop());

            row[Math.floor(i/2)].scrollLeft += -firstCardWidth;
        }

        else
        {
            //rowChildren[Math.floor(i/2)].push(rowChildren[Math.floor(i/2)].shift());

            row[Math.floor(i/2)].scrollLeft += firstCardWidth;
            row[Math.floor(i/2)].appendChild(rowChildren[0]);
        }
    });
});