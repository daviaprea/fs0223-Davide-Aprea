let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjc5MTg4Zjc0MDAwMTQyODc0M2YiLCJpYXQiOjE2ODM4Nzk4MjYsImV4cCI6MTY4NTA4OTQyNn0.6Cz0MsOo3NnH-nUfXTi6HAJKrsgwGAzFOVtRn2JfKwI";
let prodId = new URLSearchParams(window.location.search).get('idProd');

fetch("https://striveschool-api.herokuapp.com/api/product/"+prodId, {
    headers:{
        "Authorization": "Bearer "+token
    }
})
.then(res=>{
    if(res.ok) return res.json();
})
.then(prod=>{
    let row=document.getElementById("cardGrid");

    row.innerHTML=`
    <div class="col-12 col-md-10 text-center flex-grow-1">
        <img src="${prod.imageUrl}" class="img-fluid">
        <h3>${prod.name} <span>${prod.price}</span></h3>
        <p>${prod.description}</p>
    </div>`;
})