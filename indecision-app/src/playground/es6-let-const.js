var nameVar='Andrew';
var  nameVar= 'Mike';
console.log('nameVar',nameVar);


let nameLet='Jen';
nameLet='Jule';

console.log(nameLet)


const nameConst='Frenk';
console.log(nameConst);

function getPetName()
{
    var petName='Rex';
    return petName;
}

const petName=getPetName();

console.log(petName);


//Block scoping

const fullName='Jen Babic';
let firstName;
if(fullName){
    firstName=fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);