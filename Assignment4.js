Array.prototype.myMap = function (callback) {
     let newArr = [];
     for (let i = 0; i < this.length; i++) {
          newArr.push(callback(this[i], i, this));
     }
     return newArr;
}

let myMapArr = [1, 2, 3, 4, 5];
console.log(myMapArr.myMap(n => n * 3));

Array.prototype.myReduce = function (callback, initialValue) {
     let oldVal = initialValue === undefined ? this[0] : initialValue;
     let start = initialValue === undefined ? 1 : 0;
     for (let i = start; i < this.length; i++) {
          oldVal = callback(oldVal, this[i], i, this);
     }
     return oldVal;
}

let myReduceArr = [9, 8, 7, 6, 5];
console.log(myReduceArr.myReduce((acc, item) => acc + item));