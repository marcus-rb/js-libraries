//vv Array.prototype.log vv
//Logs the array to the console with each element being given an index to represent its position in the array

Array.prototype.log = function() {
  console.table(this);
}

//__________________________________________________
//vv Array.prototype.divide vv
//Returns a new array where the original array is divided into sub-arrays of x length

Array.prototype.divide = function(x) {
  let temp = [];
  for (let i = 0; i < this.length; i+=x) {
    temp.push(this.slice(i,x+i))
  }
  return temp;
}

//_______________________________________________
//vv Array.prototype.objectify vv
//Puts two and two values in an array together and pairs them as property and value. Returns a new object.

Array.prototype.objectify = function() {
  let thisObj = {}
  for (let i = 0; i < this.length; i+=2) {
    thisObj[this[i]] = this[i+1];
  }
  return thisObj;
}

//______________________________________________
//vv Array.protype.flatten vv
//Returns a completely flattened array; all subarrays will be flattened. E.g.: const flattened = [1,[2,3,4],[["five",8],"d]]; flattened = [1,2,3,4,"five",9,"d"]

Array.prototype.flatten = function() {
  let operand = this;
  function flattener(array) {
    return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattener(val)) : acc.concat(val), []);
  }
  return flattener(operand);
}

//_______________________________________________
//vv Array.prototype.flatten vv
//Takes either two or three parameters. Returns a new array, with every n-th item modified by the callback function.
//The value true can be included as the second argument. In that case, all original items of the array will also be added alongside the modifed ones
//Examples: const firstArray = [1,1,1,1,1,1,1,1,1]; const newArray = firstArray.forEvery(2,true, item => item+1)
//This gives newArray = [1,2,1,2,1,2,1,2,1]. Alternatively: const newArray = firstArray.forEvery(2, item => item+1)
//Second methid gives newArray = [2,2,2,2]

Array.prototype.forEvery = function(...args) {
  let tempArr = [];
  const incr = parseInt(Math.round(args[0]));
  
  if (args.length === 2 && args[1] != true) {
    const callback = (x) => args[1](x);
    
    for (let i = incr-1; i<this.length; i+=incr) tempArr.push(callback(this[i]))

  } else if (args.length === 3 && args[1] === true) {
    const callback = (x) => args[2](x);

    for (let i = incr-1; i<this.length; i++) i % incr == 0 ? tempArr.push(callback(this[i])) : tempArr.push(this[i]);
  }
  return tempArr;
}

/*export {Array.prototype.divide};
export {Array.prototype.log};
export {Array.prototype.objectify};
export {Array.prototype.flatten};*/
