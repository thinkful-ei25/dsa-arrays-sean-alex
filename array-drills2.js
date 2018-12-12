'use strict';

//console.log(((str = "tauhida parveen") => str.replace(/ /g, () => "%20"))());
// console.log(((str = "www.thinkful.com /tauh ida parv een") => str.replace(/ /g, () => "%20"))());  

function URLify(str){ 
    let URLified =""; 
    for (let i = 0; i < str.length; i++){ 
        if (str[i] === " "){ 
            URLified +="%20"
        }
        else { 
            URLified += str[i]
        }
    }
    return URLified; 
}
// let str = "tauhida parveen"; 
let str = "www.thinkful.com /tauh ida parv een"
let URLified = URLify(str); 
console.log(URLified); 

function filter(arr = [2, 2, 4, 7], num = 5){ 
    let newArray= []; 
    for (let i = 0; i < arr.length; i++){ 
        if (arr[i] > num){
            newArray.push(arr[i]);
        }
       
    }
    return newArray; 
}

console.log(filter()); 

function maxSum(arr){
    let total=0;
    let max=0;
    for(let i=0; i < arr.length; i++){
        let elem = arr[i];
        total= Math.max(0, total + elem);
        max = Math.max(max, total);
    }
    return max;
}

console.log(maxSum([4,6,-3,5,-2,1]));

function mergeArr(arr1, arr2){
    let newArr = [];
    let i=0;
    let j=0;
    let k=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            newArr[k++]=arr1[i++]; 
        } else {
            newArr[k++]=arr2[j++];
        }
    }

    while (i < arr1.length){
        newArr[k++]=arr1[i++]; 
    }

    while (j < arr2.length){
        newArr[k++]=arr2[j++];
    }

    return newArr;
}

console.log(mergeArr([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));



