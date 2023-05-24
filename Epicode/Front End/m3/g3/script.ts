class TassCalc
{
    codRedd:number;
    redAnnoLordo:number;
    private tasseInps:number;
    private tasseIrpef:number;

    constructor(red:number, cod:number)
    {
        this.codRedd=cod;
        this.redAnnoLordo=red;

        if(red<1000)
        {
            this.tasseInps=0.05;
            this.tasseIrpef=0.03;
        }

        else if(red>=1000 && red<2500)
        {
            this.tasseInps=0.08;
            this.tasseIrpef=0.06;
        }

        else if(red>=2500 && red<5000)
        {
            this.tasseInps=0.1;
            this.tasseIrpef=0.08;
        }

        else if(red>=5000 && red<8000)
        {
            this.tasseInps=0.13;
            this.tasseIrpef=0.1;
        }

        else
        {
            this.tasseInps=0.16;
            this.tasseIrpef=0.12;
        }
    }

    get inpsTax()
    {
        return this.tasseInps;
    }

    get irpefTax()
    {
        return this.tasseIrpef;
    }

    get redditoAnnuoNetto()
    {
        return this.tasseIrpef*(1-this.tasseInps)*(1-this.tasseIrpef)*(1-this.codRedd);
    }
}