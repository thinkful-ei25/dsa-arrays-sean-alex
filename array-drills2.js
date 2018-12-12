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