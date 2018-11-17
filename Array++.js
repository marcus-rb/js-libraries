Array.prototype.log = function() {
  console.log(this);
}

Array.prototype.divide = function(x) {
  let temp = [];
  for (let i = 0; i < this.length; i+=x) {
    temp.push(this.slice(i,x+i))
  }
  return temp;
}

Array.prototype.objectify = function() {
  let thisObj = {}
  for (let i = 0; i < this.length; i+=2) {
    thisObj[this[i]] = this[i+1];
  }
  return thisObj;
}

Array.prototype.flatten = function() {
  let operand = this;
  function flattener(array) {
    return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattener(val)) : acc.concat(val), []);
  }
  return flattener(operand);
}

/*export {Array.prototype.divide};
export {Array.prototype.log};
export {Array.prototype.objectify};
export {Array.prototype.flatten};*/
