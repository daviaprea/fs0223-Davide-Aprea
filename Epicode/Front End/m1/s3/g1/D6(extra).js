// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n)
{
    let arr=[];
    for(let i=0; i<n; i++)
    {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

function checkArray(arr)
{
    let somma=0;
    for(el of arr)
    {
        if(el>5)
        {
            console.log(`${el} è maggiore di 5.`);
            somma+=el;
        }
        else console.log(`${el} è minore o uguale a 5.`);
    }
    console.log(`La somma totale è ${somma}`);
}

checkArray(giveMeRandom(5));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart=[
    {
        price: 249,
        name: "Computer",
        id: "63527",
        quantity: 1
    },

    {
        price: 3455,
        name: "TV",
        id: "5435",
        quantity: 1
    },

    {
        price: 82,
        name: "Casse PC",
        id: "45684",
        quantity: 4
    }
]

function shoppingCartTotal(objArr)
{
    let tot=0;
    for(el of objArr)
    {
        tot+=el.price;
    }
    console.log(`Totale da pagare: ${tot}`);
}

shoppingCartTotal(shoppingCart);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function addToShoppingCart(newObj)
{  
    shoppingCart.push(newObj);
    let tot=0;
    for(el of shoppingCart)
    {
        tot+=el.quantity;
    }
    console.log(`Prodotti nel carrello: ${tot}`);
}

addToShoppingCart({
    price: 820,
    name: "Planetaria",
    id: "34663",
    quantity: 2
});

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(arr)
{
    let maxPrice = arr.reduce((a, b) => a.price > b.price ? a : b);
    console.log(maxPrice);
}

maxShoppingCart(shoppingCart);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let last = (vet) => vet[vet.length-1];
console.log(last(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function loopUntil(n)
{
    let arr=[];
    cond=true;
    while(cond)
    {
        arr.push(Math.floor(Math.random() * 10));
        if(arr[arr.length-1]>n && arr[arr.length-2]>n && arr[arr.length-3]>n) cond=false;
    }
    console.log(arr);
}

loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let average = (vet) => vet.reduce((a, b) => a+b)/vet.length;

let array=[1,2,3,4,5,6,7,8,9];
console.log(average(array));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let longest = (vet) => vet.reduce((a, b) => a.length>b.length ? a:b);

let arrayStr=["aaa", "befduewfunuwnf", "feesewfew", "fewifmwiefmwefiwfe", "efdjjdw"];
console.log(longest(arrayStr));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//let spamCheck = (emailContent) => emailContent.includes("SPAM") ? true;

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function matrixGenerator(x, y)
{
    let vet=[];
    for(let i=0; i<x; i++)
    {
        for(let j=0; j<y; j++)
        {
            vet.push(String(i)+String(j));
        }
    }
    console.log(vet);
}

matrixGenerator(4, 3);