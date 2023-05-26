interface Phone{
    carica:number;
    numeroChiamate:number;
    costoMinuto:number;
    ricarica(euro:number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(min:number):void;
    azzeraChiamate():void;
}

class Smartphone implements Phone{
    carica: number=0;
    numeroChiamate: number=0;
    costoMinuto: number=0.2;
    ricarica(euro: number): void {
        this.carica+=euro;
    }
    numero404(): string {
        return this.carica+"€";
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    chiamata(min: number): void {
        if(this.costoMinuto*min<this.carica)
        {
            this.carica-=this.costoMinuto*min;
            this.numeroChiamate++;
        }
    }
    azzeraChiamate(): void {
        this.numeroChiamate=0;
    }
}