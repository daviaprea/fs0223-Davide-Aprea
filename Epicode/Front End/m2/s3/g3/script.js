fetch("https://striveschool-api.herokuapp.com/books")
.then(res=>{
    if(res.ok) return res.json();
    else console.log("Err");
})
.then(data=>{
    //console.log(data)
    let row=document.querySelector(".row");
    let totPrice=0;
    data.forEach((book, i) => {
        let bookTemp=document.getElementById("bookCards");
        let bookCard=bookTemp.content.cloneNode(true);

        bookCard.querySelector(".card-img-top").src=book.img;
        bookCard.querySelector(".card-title").innerText=book.title;
        bookCard.querySelector(".card-text").innerText=book.price;
        bookCard.querySelector(".card-text").innerText=book.price;

        bookCard.querySelector(".del").addEventListener("click", (e)=> /*btn.closest(".col").remove()*/ e.currentTarget.closest(".col").remove());

        bookCard.querySelector(".buy").addEventListener("click", (e)=>{
            let listItem=document.createElement("li");
            listItem.classList.add("dropdown-item");
            let price=e.currentTarget.parentElement.querySelector(".col .card-text").innerText;
            let title=e.currentTarget.parentElement.querySelector(".col .card-title").innerText;
            let tot=document.getElementById("tot");

            listItem.innerHTML=`<span>${title}</span> - <span class="moviePrice">${price}</span>$`;
            document.querySelector("nav .dropdown-menu").appendChild(listItem);

            tot.innerText=Number(tot.innerText)+Number(price);

            let trashBtn=document.createElement("button");
            trashBtn.innerHTML='<i class="far fa-trash-alt">';
            listItem.appendChild(trashBtn);

            trashBtn.addEventListener("click", (e)=>{
                tot.innerText=Number(tot.innerText)-Number(e.currentTarget.parentElement.children[1].innerText);
                e.currentTarget.closest(".dropdown-item").remove()
            });
        });

        row.appendChild(bookCard);
    });
});