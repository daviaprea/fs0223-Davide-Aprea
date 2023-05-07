let row = document.querySelector("section .row");
let arrowBtn=document.querySelectorAll("section .container-fluid i");
let firstCardWidth = row.querySelector(".col").offsetWidth;
let rowChildren=[...row.children];
let isDragging=false, startX, startScrollLeft;

let cardPerView=Math.round(row.offsetWidth/firstCardWidth);
rowChildren.slice(-cardPerView).reverse().forEach(card=>{
    row.insertAdjacentHTML("afterbegin", card.outerHTML);
});

rowChildren.slice(0, cardPerView).forEach(card=>{
    row.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        row.scrollLeft += btn.id==="left-arr" ? -firstCardWidth : firstCardWidth;
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

let infiniteScroll=()=>{
    if(row.scrollLeft === 0)
    {
        row.classList.add("no-transition");
        row.scrollLeft=row.scrollWidth-(2*row.offsetWidth);
        row.classList.remove("no-transition");
    }

    else if(Math.floor(row.scrollLeft) === row.scrollWidth - row.offsetWidth)
    {
        row.classList.add("no-transition");
        row.scrollLeft=row.offsetWidth;
        row.classList.remove("no-transition");
    }
}

row.addEventListener("mousedown", dragStart);
row.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
row.addEventListener("scroll", infiniteScroll);