let draw=(a:number, b:number)=>{
    let randNum=Math.floor(Math.random()*100)+1;
    Math.abs(a-randNum)<Math.abs(b-randNum) ? console.log(`Il valore che si avvicina di più al numero casuale ${randNum} è ${a}.`) : console.log(`Il valore che si avvicina di più al numero casuale ${randNum} è ${b}.`);
}

draw(70, 34);