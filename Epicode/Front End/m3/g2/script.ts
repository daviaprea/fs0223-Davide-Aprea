class SonAccount{
    balanceInit=0;

    oneDeposit(val:number){
        this.balanceInit+=val;
        console.log("Versamento andato a buon fine. Saldo attuale: "+this.balanceInit);
    }

    oneWithDraw(val:number){
        if(this.balanceInit-val>0)
        {
            this.balanceInit-=val;
            console.log("Prelievo andato a buon fine. Saldo attuale: "+this.balanceInit);
        }
        else console.log("Non hai mica tutti sti soldi, oh.");
    }
}

class MotherAccount extends SonAccount{
    addInterest(){
        this.balanceInit*=0.9;
    }
}

let deposit=new SonAccount();
deposit.oneDeposit(20);