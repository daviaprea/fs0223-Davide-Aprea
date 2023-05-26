type Registro={
    readonly id:number;
    readonly durata:number;
    readonly data:Date;
}

interface Phone{
    carica:number;
    numeroChiamate:number;
    costoMinuto:number;
    registroChiamate:Registro[];

    ricarica(euro:number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(min:number):void;
    azzeraChiamate():void;
    mostraRegistroChiamate():Registro[];
    filtraChiamatePerDataOra(data:Date):Registro[];
}

class Smartphone implements Phone{
    carica: number=0;
    numeroChiamate: number=0;
    costoMinuto: number=0.2;
    registroChiamate:Registro[]=[];
    
    ricarica(euro:number): void {
        this.carica+=euro;
    }
    numero404(): string {
        return this.carica+"€";
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    chiamata(min:number): void {
        if(this.costoMinuto*min<this.carica)
        {
            this.registroChiamate.push({
                id: this.numeroChiamate,
                durata: min,
                data: new Date()
            });
            this.carica-=this.costoMinuto*min;
            this.numeroChiamate++;
        }
    }
    azzeraChiamate(): void {
        this.numeroChiamate=0;
        this.registroChiamate=[];
    }
    mostraRegistroChiamate(): Registro[] {
        return this.registroChiamate;
    }
    filtraChiamatePerDataOra(dataFilter: Date): Registro[] {
        return this.registroChiamate.filter(chiamata=>
            chiamata.data.toLocaleDateString()==dataFilter.toLocaleDateString() &&
            chiamata.data.getHours()==dataFilter.getHours() &&
            chiamata.data.getMinutes()==dataFilter.getMinutes()
        );
    }
}

let myPhone=new Smartphone();

document.querySelector("#ric button")?.addEventListener("click", ()=>myPhone.ricarica(Number((<HTMLInputElement>document.querySelector("#ric input")).value)));

document.querySelector("#call button")?.addEventListener("click", ()=>myPhone.chiamata(Number((<HTMLInputElement>document.querySelector("#call input")).value)));

document.querySelector("#dateFilt button")?.addEventListener("click", ()=>console.log(myPhone.filtraChiamatePerDataOra(new Date((<HTMLInputElement>document.querySelector("#dateFilt input")).value))));

document.getElementById("creditCheck")?.addEventListener("click", ()=>console.log(myPhone.numero404()));

document.getElementById("callsCheck")?.addEventListener("click", ()=>console.log(myPhone.getNumeroChiamate()));

document.getElementById("callsHistory")?.addEventListener("click", ()=>console.log(myPhone.mostraRegistroChiamate()));

document.getElementById("deleteCallsHistory")?.addEventListener("click", ()=>myPhone.azzeraChiamate());