type Registro={
    readonly id:number;
    readonly durata:number;
    readonly data:Date;
}

interface Phone{
    carica:number;
    numeroChiamate:number;
    costoMinuto:number;
    registroChiamate:{}[];

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
        return this.registroChiamate.filter(chiamata=>chiamata.data.toLocaleString()==dataFilter.toLocaleString());
    }
}

let myPhone=new Smartphone();
myPhone.ricarica(50);
myPhone.chiamata(8)
console.log(myPhone.getNumeroChiamate());
console.log(myPhone.numero404());
console.log(myPhone.mostraRegistroChiamate());