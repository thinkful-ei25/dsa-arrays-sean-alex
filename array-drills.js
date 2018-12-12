const ArrayZ = require('./array-lesson'); 
main(); 
function main() {     
    let arr = new ArrayZ(0); 

    arr.push(3); 
    // console.log(arr); 
    //length: 1, capacity: 3, memory address: 0
    
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    // console.log(arr)
    //length: 6, capacity: 12, memory address: 3

    arr.pop(); 
    arr.pop(); 
    arr.pop(); 
     
    //can't do this in a loop!! what have you?????
    arr.remove(0); 
    arr.remove(0); 
    arr.remove(0); 
 
    console.log(arr); 

    //Tauhida is NOT AN NUMBER she is an instructor at Thinkful!! doh!!!
    // arr.push('tauhida'); 
    // console.log(arr.get(0)); 

    //don't access _recize from outside the class! it's private!!! _ = private privates  
}

