/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let x = 5;
let y = 7;
if(x > y) console.log(`Il valore più grande è ${x}`);
else console.log(`Il valore più grande è ${y}`);*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let x = prompt("Inserisci un numero intero:")
if(x==5) console.log("Ok.");
else console.log("Not equal.");*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let x = prompt("Inserisci un numero:")
if(x%5==0) console.log("Il numero è divisibile per 5.");*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let x = Number(prompt("Inserisci il primo numero:"));
let y = Number(prompt("Inserisci il secondo numero:"));
if(x==8 || y==8 || x+y==8 || y-x==8) console.log("Ok!");*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let totalShoppingCart = Number(prompt("Inserisci il totale che devi pagare:"));
if(totalShoppingCart>50) console.log("Spedizione gratuita.");
else console.log(`Il totale è di ${totalShoppingCart+10} euro.`);*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let totalShoppingCart = Number(prompt("Inserisci il totale che devi pagare:"));
if(totalShoppingCart>50) console.log(`Spedizione gratuita. Con lo sconto del 20% del Black Friday, al posto di pagare ${totalShoppingCart} euro, l'ammontare è di ${totalShoppingCart*0.8} euro.`);
else console.log(`Il totale è di ${(totalShoppingCart+10)*0.8} euro. Prezzo prima dello sconto: ${totalShoppingCart+10} euro.`);*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let x=8;
let y=5;
let z=23;
if(z>y && z>x && y>x) console.log(`${z} ${y} ${x}`);
else if(x>y && x>z && y>z) console.log(`${x} ${y} ${z}`);
else if(z>y && z>x && y>x) console.log(`${z} ${y} ${x}`);
else if(y>z && y>x && z>x) console.log(`${y} ${z} ${x}`);
else if(y>z && y>x && z>x) console.log(`${y} ${z} ${x}`);
else if(y>z && y>x && z>x) console.log(`${y} ${z} ${x}`);*/


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/*let x = 23;
if(typeof x == "number") console.log("Hai inserito un numero.");
else console.log(`Hai inserito una variabile ${typeof x}`);*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let x = prompt("Inserisci numero:")
if(x%2==0) console.log("Il numero è pari.");
else console.log("Il numero è dispari.");*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let val = 7
  if (val < 10 && val >= 5){
      console.log("Il numero è tra 5 e 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}



/* SCRIVI QUI LA TUA RISPOSTA */
me.city="Toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let vet = [];
/*vet.push(1);
vet.push(2);
vet.push(3);
vet.push(4);
vet.push(5);
vet.push(6);
vet.push(7);
vet.push(8);
vet.push(9);
vet.push(10);*/

/*for(let i=1; i<=10; i++)
{
  vet.push(i);
}
console.log(vet);*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
vet[vet.length-1]=100;