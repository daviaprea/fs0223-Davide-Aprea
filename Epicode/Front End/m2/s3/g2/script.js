let cont=0;
document.getElementById("sub").addEventListener("click", ()=>{
    let pers=document.getElementById("nameInput");
    localStorage.setItem(`Persona ${cont}`, pers.value);
    cont++;
    pers.value="";
    document.getElementById("prevPerson").innerText=localStorage.getItem(`Persona ${cont-1}`);
});

document.getElementById("remove").addEventListener("click", ()=>{
    if(cont>0)
    {
        localStorage.removeItem(`Persona ${cont-1}`);
        cont--;
        document.getElementById("prevPerson").innerText=localStorage.getItem(`Persona ${cont-1}`);
    }
});

/*let spanTimer=document.getElementById("timer");
sessionStorage.setItem("time", "0");
setInterval(()=>{
    let time=Number(sessionStorage.getItem("time"));
    spanTimer.innerText=`${time}s`;
    time++;
    sessionStorage.setItem("time", `${time}`);
}, 1000);*/

let spanTimer=document.getElementById("timer");

setInterval(()=>{
    if(sessionStorage.getItem("time")==null) sessionStorage.setItem("time", "0");

    else{
        let time=Number(sessionStorage.getItem("time"));
        spanTimer.innerText=`${time}s`;
        time++;
        sessionStorage.setItem("time", `${time}`);
    }
}, 1000);