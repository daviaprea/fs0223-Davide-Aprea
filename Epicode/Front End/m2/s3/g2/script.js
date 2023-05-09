document.getElementById("sub").addEventListener("click", ()=>{
    if(localStorage.getItem("cont")==null) localStorage.setItem("cont", "0");

    let cont=Number(localStorage.getItem("cont"));
    let pers=document.getElementById("nameInput");
    localStorage.setItem(`Persona ${cont}`, pers.value);
    pers.value="";
    document.getElementById("prevPerson").innerText=localStorage.getItem(`Persona ${cont}`);
    cont++;
    localStorage.setItem("cont", cont);
});

document.getElementById("remove").addEventListener("click", ()=>{
    let cont=Number(localStorage.getItem("cont"));
    if(cont>=0)
    {
        localStorage.removeItem(`Persona ${cont-1}`);
        cont--;
        document.getElementById("prevPerson").innerText=localStorage.getItem(`Persona ${cont-1}`);
        localStorage.setItem("cont", cont);
    }
});

let spanTimer=document.getElementById("timer");

setInterval(()=>{
    if(sessionStorage.getItem("time")==null) sessionStorage.setItem("time", "0");

    else
    {
        let time=Number(sessionStorage.getItem("time"));
        spanTimer.innerText=`${time}s`;
        time++;
        sessionStorage.setItem("time", `${time}`);
    }
}, 1000);