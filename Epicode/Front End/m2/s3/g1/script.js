/*class User
{
    constructor(firstName, lastName, age, location)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.location=location;
    }
    ageGap(otherPerson)
    {
        this.age>otherPerson.age ? console.log(this.firstName+" is older than "+otherPerson["firstName"]) : console.log(this.firstName+" is not older than "+otherPerson["firstName"]);
    }
}

let x=new User("Davide", "Aprea", 2, "Seregno");
let y=new User("Alessandro", "Rossi", 43, "Treviso");
x.ageGap(y);*/

class Pet{
    constructor(petName, ownerName, species, breed)
    {
        this.petName=petName;
        this.ownerName=ownerName;
        this.species=species;
        this.breed=breed;
    }
    sameOwner(otherPet)
    {
        return otherPet["ownerName"]==this.ownerName;
    }
}

let petArr=[];

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    let name=document.getElementById("name");
    let owner=document.getElementById("ownerName");
    let species=document.getElementById("species");
    let breed=document.getElementById("breed");
    let listCont=document.getElementById("pet-list");

    if(petArr.length==0)
    {
        let list=document.createElement("ul");
        listCont.appendChild(list);
        
        let listItem=document.createElement("li");
        listItem.innerText="Pet name: "+name.value+"; Owner name: "+owner.value+"; Species: "+species.value+"; Breed: "+breed.value+";";
        list.appendChild(listItem);
    }

    else
    {
        let listItem=document.createElement("li");
        listItem.innerText="Pet name: "+name.value+"; Owner name: "+owner.value+"; Species: "+species.value+"; Breed: "+breed.value+";";
        listCont.querySelector("ul").appendChild(listItem);
    }

    petArr.push(new Pet(name.value, owner.value, species.value, breed.value));
    
    name.value="";
    owner.value="";
    species.value="";
    breed.value="";
});