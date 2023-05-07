let row = document.querySelector("section .row");
let arrowBtn=document.querySelectorAll("section .container-fluid i");
let firstCardWidth = row.querySelector(".col").offsetWidth;
let rowChildren=[...row.children];
let isDragging=false, startX, startScrollLeft;

console.log(arrowBtn);

arrowBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        console.log(btn.classList[2]);
        row.scrollLeft += btn.classList[2]=="left-arr" ? -firstCardWidth : firstCardWidth;
    });
});

let dragStart=(e)=>{
    isDragging=true;
    startX=e.pageX;
    startScrollLeft=row.scrollLeft;
}

let dragging=(e)=>{
    if(!isDragging) return;
    row.scrollLeft = startScrollLeft-(e.pageX-startX);
}

let dragStop=()=>{
    isDragging=false;
}

row.addEventListener("mousedown", dragStart);
row.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);