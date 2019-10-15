const add= (a,b) =>{
    return a+b;
}
console.log(add(55,1));

//no londer bound

const user ={
    name:'Andrew',
    cities:['Philadelphia', 'New York','Dublin'],
    printPlacesLived(){
        return this.cities.map((city) => this.name +' has lived ' + city);
          
      
}    
};

console.log(user.printPlacesLived());


const multiplier={
    numbers:[4,5,6],
    multiplyBy:3,
    multiply(){
        return this.numbers.map((no) => no * this.multiplyBy);
       
    }
};

console.log(multiplier.multiply()); //[1][2][3] *2

