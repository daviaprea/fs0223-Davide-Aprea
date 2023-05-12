let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjc5MTg4Zjc0MDAwMTQyODc0M2YiLCJpYXQiOjE2ODM4Nzk4MjYsImV4cCI6MTY4NTA4OTQyNn0.6Cz0MsOo3NnH-nUfXTi6HAJKrsgwGAzFOVtRn2JfKwI";
let prodId = new URLSearchParams(window.location.search).get('idProd');

let deleteItem = function(){
    fetch("https://striveschool-api.herokuapp.com/api/product/"+prodId, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer "+token
        }
    })
    .then(res=>{
        if(res.ok)
        {
            console.log("Dati eliminati");
            document.getElementById("form").reset();
            //new URLSearchParams(window.location.search).delete("idProd");
        }
    })
    .catch(err=>console.log("Errore "+err))
}

const showModal=()=>{
    document.getElementById("modalTitle").innerHTML="Are you sure you want to delete this item?";
    document.getElementById("modalBody").innerHTML=`
    <h3 class="text-center">${document.getElementById("prodName").value}</h3>
    <img class="img-fluid" src="${document.getElementById("prodImg").value}">`;
        
    document.getElementById("modalFooter").innerHTML=`<button type="button" class="btn btn-danger" onclick="deleteItem()" data-bs-dismiss="modal">Delete</button>`
};

document.getElementById("resBtn").addEventListener("click", ()=>document.getElementById("form").reset());

if(prodId)
{
    document.getElementById("btn-section").innerHTML+=`<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showModal()">Delete product</button>`;
    document.getElementById("sub").innerHTML="Modify product";
    fetch("https://striveschool-api.herokuapp.com/api/product/"+prodId, {
        headers: {
            "Authorization": "Bearer "+token
        }
    })
    .then(res=>{
        if(res.ok) return res.json();
    })
    .then(data=>{
        document.getElementById("prodName").value=data.name;
        document.getElementById("prodDesc").value=data.description;
        document.getElementById("prodBrand").value=data.brand;
        document.getElementById("prodImg").value=data.imageUrl;
        document.getElementById("prodPrice").value=data.price;
    })
}

else prodId="";

document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault();

    let prodName=document.getElementById("prodName");
    let prodDesc=document.getElementById("prodDesc");
    let prodBrand=document.getElementById("prodBrand");
    let prodImg=document.getElementById("prodImg");
    let prodPrice=document.getElementById("prodPrice");

    fetch("https://striveschool-api.herokuapp.com/api/product/"+prodId, {
        method: prodId ? "PUT" : "POST",
        body: JSON.stringify({
            name: prodName.value,
            description: prodDesc.value,
            brand: prodBrand.value,
            imageUrl: prodImg.value,
            price: prodPrice.value
        }),
        headers: {
            "Authorization": "Bearer "+token,
            "Content-Type": "application/json"
        }
    })
    .then(res=>{
        if(res.ok) console.log("Dati inviati")
        else console.log("Errore")
    })
    .catch(err=>console.log("Errore "+err))
});