fetch("https://striveschool-api.herokuapp.com/books")
.then(res=>{
    if(res.ok) return res.json();
    else console.log("Err");
})
.then(data=>{
    //console.log(data)
    let row=document.querySelector(".row");
    data.forEach((book, i) => {
        let bookTemp=document.getElementById("bookCards");
        let bookCard=bookTemp.content.cloneNode(true);

        bookCard.querySelector(".card-img-top").src=book.img;
        bookCard.querySelector(".card-title").innerText=book.title;
        bookCard.querySelector(".card-text").innerText=book.price;
        bookCard.querySelector(".card-text").innerText=book.price;

        bookCard.querySelector(".btn-danger").addEventListener("click",()=>{
            console.log(row.querySelectorAll(".col")[i]);
            //row.querySelectorAll(".col")[i].remove();
        });

        bookCard.querySelector(".buy").addEventListener("click", ()=>{
            let listItem=document.createElement("li");
            let price=row.querySelectorAll(".col .card-text")[i].innerText;
            let tot=document.getElementById("tot");

            listItem.innerHTML=`<li class="dropdown-item">${row.querySelectorAll(".col .card-title")[i].innerText} - ${price}$ <i class="far fa-trash-alt"></li>`;
            document.querySelector("nav .dropdown-menu").appendChild(listItem);

            tot.innerText=Number(tot.innerText)+Number(price);

            let trash=document.querySelectorAll("nav .dropdown-menu i")[i];
            console.log(trash);
        });

        row.appendChild(bookCard);
    });
});