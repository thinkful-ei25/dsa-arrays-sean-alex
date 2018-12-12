const memoryModule = require('./memory'); 

//we're a member of the super groovy yacht club now!
const memory = new memoryModule(); 

class ArrayZ {

  constructor(length) {
    this.length = length;
    this.ptr = memory.allocate(0);
    this.SIZE_RATIO = 3; 
    this._capacity = this.length * this.SIZE_RATIO;
  }
  _resize(size){
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if(this.ptr === null){
      throw new Error('Out of memory');
    }
    memory.copy(oldPtr, this.ptr, this.length);
    memory.free(oldPtr);
    this._capacity = size; 
  }

  push(val){
    if(this.length >= this._capacity){
      this._resize((this.length+1)* this.SIZE_RATIO);
    }
    memory.set(this.ptr+this.length, val);
    this.length++;
  }

  get(index){
    if(index<0 || index >= this.length){
      throw new Error('Index Error');
    }
    return memory.get(this.ptr + index);
  }

  pop(){
    if (this.length ===0){
      throw new Error('index error');
    }
    const value= memory.get(this.ptr + this.length-1);
    this.length--;
    return value;
  }

  insert(index, value){
    if(index < 0 || index >= this.length){
      throw new Error('index error');
    }

    if(this.length >= this._capacity){
      this._resize((this.length+1)* this.SIZE_RATIO);
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length-index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index){
    if(index < 0 || index >= this.length){
      console.log('hello')
      throw new Error('index error');
    }
    // //console.log(this.ptr + index+ 1, this.ptr +index, this.length-index-1); 
    // console.log('call before')
    memory.copy(this.ptr + index +1, this.ptr+index, this.length-index-1);
    // console.log('call after')
    // memory.copy(this.ptr + index +1, this.ptr+index, this.length);
    this.length--;
  }
}

module.exports = ArrayZ; 