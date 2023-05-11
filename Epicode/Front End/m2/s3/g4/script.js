let apiKey="TXAl4tsq0AH939vI13rKvpyMo7xSgfkSwtTUiEnLKjjvEI0zqABAVoL5";

const delCard=(btn)=>btn.closest(".col").remove();
const showModal=(btn)=>{
  document.getElementById("modalBody").src=btn.closest(".card").firstElementChild.src;
  document.getElementById("exampleModalLabel").innerHTML=btn.closest(".card-body").firstElementChild.innerHTML;
};

function searchImages(param)
{
    fetch(`https://api.pexels.com/v1/search?query=${param}`, {
        headers:{
            Authorization: apiKey
        }
    })
    .then(res=>{
        if(res.ok) return res.json();
    })
    .then(data=>{
        console.log(data.photos);
        let row=document.getElementById("albumGrid");
        data.photos.forEach(pic => {
            row.innerHTML+=`
            <div class="col">
                <div class="card mb-4 shadow-sm">
                  <img class="card-img-top" src=${pic.src.portrait} alt="">
                  <div class="card-body">
                    <h5 class="card-title"><a text-decoration-none href="img-detail.html?imgId=${pic.id}">${pic.alt}</a></h5>
                    <p class="card-text">Photographer: ${pic.photographer}</p>
                    <div class="d-flex justify-content-between align-items-center"></div>
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#exampleModal" onclick="showModal(this)">
                          View
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="delCard(this)">
                          Hide
                        </button>
                      </div>
                      <small class="text-muted">${pic.id}</small>
                    </div>
                  </div>
                </div>
            </div>
            `;
        });
    })
}

let photoGrid=document.getElementById("albumGrid");
document.getElementById("loadImg").addEventListener("click", ()=>{
    photoGrid.innerHTML="";
    searchImages("cities");
});

document.getElementById("searchForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    
    let searchInp=document.getElementById("searchInput").value;
    if(searchInp!="")
    {
        photoGrid.innerHTML="";
        searchImages(searchInp);
        searchInp="";
    }
});