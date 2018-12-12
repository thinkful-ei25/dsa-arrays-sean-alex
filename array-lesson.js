import memory from './memory';

class Array {
  constructor(length) {
    this.length = length;
    this._capacity = this.length * Array.SIZE_RATIO;
    this.ptr = memory.allocate(0);
  }


  _resize(size){
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if(this.ptr === null){
      throw new Error('Out of memory');
    }
    memory.copy(oldPtr, this.ptr, this.length);
    memory.free(oldPtr);
  }

  push(val){
    if(this.length >= this._capacity){
      this._resize((this.length+1)* Array.SIZE_RATIO);
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
      this._resize((this.length+1)* Array.SIZE_RATIO);
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length-index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index){
    if(index < 0 || index >= this.length){
      throw new Error('index error');
    }
    memory.copy(this.ptr + index +1, this.ptr+index, this.length-index-1);
    this.length--;
  }

}

Array.SIZE_RATIO = 3;