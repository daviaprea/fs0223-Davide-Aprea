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

let dragStop=()=>{
    isDragging=false;
}

row.forEach(r=>{
    r.addEventListener("mousedown", (e)=>{
        isDragging=true;
        startX=e.pageX;
        startScrollLeft=r.scrollLeft;
    });

    r.addEventListener("mousemove", (e)=>{
        if(!isDragging) return;
        r.scrollLeft = startScrollLeft-(e.pageX-startX);
    });
});

document.addEventListener("mouseup", dragStop);