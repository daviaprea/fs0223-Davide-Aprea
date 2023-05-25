class Capo
{
    constructor(private id:number, private codProd:number, protected collezione:string, protected capo:string, protected modello:number, protected quantita:number, protected colore:string, protected prezzoSenzaIva:number, protected prezzoIva:number, protected disponibile:string, protected saldo:number){}

    get getPrice(){return this.prezzoIva}
}

fetch("./Abbigliamento.json")
.then(res=>res.json())
.then(res=>{
    let arr:Capo[]=[];
    res.forEach((el, i)=>{
        arr.push(new Capo(el.id, el.codprod, el.collezione, el.capo, el.modello, el.quantita, el.colore, el.prezzoivaesclusa, el.prezzoivainclusa, el.disponibile, el.saldo));
        console.log(`Prezzo: ${arr[i].getPrice}€`);
    });
    console.log(arr);
})