let row = document.querySelector("section .row");
let isDragging=false, startX, startScrollLeft;

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