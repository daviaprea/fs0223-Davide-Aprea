let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjc5MTg4Zjc0MDAwMTQyODc0M2YiLCJpYXQiOjE2ODM4Nzk4MjYsImV4cCI6MTY4NTA4OTQyNn0.6Cz0MsOo3NnH-nUfXTi6HAJKrsgwGAzFOVtRn2JfKwI";

fetch("https://striveschool-api.herokuapp.com/api/product", {
    headers: {
        "Authorization": "Bearer "+token
    }
})
.then(res=>{
    if(res.ok) return res.json();
    else comsole.log("Err");
})
.then(data=>{
    let cardGrid=document.getElementById("cardGrid");
    data.forEach(product => {
        cardGrid.innerHTML+=`
            <div class="col">
                <div class="card shadow w-100" style="width: 18rem;">
                    <img src="${product.imageUrl}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">Price: ${product.price}€</p>
                        <div>
                            <a href="backoffice.html?idProd=${product._id}" class="btn btn-primary">Edit</a>
                            <a href="details.html?idProd=${product._id}" class="btn btn-danger">View more</a>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    document.getElementById("spinner").style.display="none";
})
.catch(err=> console.log(err));