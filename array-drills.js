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
    // console.log(arr); 
    //length: 3, capacity: 12, memory address: 3

    const firstItem = arr.get(0); 
    console.log(firstItem); 

    for (let i = 0; i < arr.length; i++){ 
        arr.pop()
    }
    console.log(arr);
    
    const firstItemz = arr.get(0); 
    console.log(firstItemz); 
}

