let apiKey="TXAl4tsq0AH939vI13rKvpyMo7xSgfkSwtTUiEnLKjjvEI0zqABAVoL5";
const PIXELS_SINGLE_URL = 'https://api.pexels.com/v1/photos/';
let photoIdFromAddressBar = new URLSearchParams(window.location.search).get('imgId');
console.log(photoIdFromAddressBar);
fetch(PIXELS_SINGLE_URL+photoIdFromAddressBar, {
        headers:{
            Authorization: apiKey
        }
    })
    .then(res=>{
        if(res.ok) return res.json();
    })
    .then(pic=>{
        console.log(pic);
        let row=document.getElementById("albumGrid");

        row.innerHTML=`
        <div class="col-12 col-md-10 text-center">
            <img src="${pic.src.portrait}" class="h-50">
            <h3>${pic.photographer}</h3>
            <a href="${pic.photographer_url}">Photographer website</a>
        </div>`;

        document.querySelector('.jumbotron').style.backgroundColor=pic.avg_color;
    })