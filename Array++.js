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

Array.prototype.forEvery = function(...args) {
  let tempArr = [];
  const incr = parseInt(args[0]);
  if (args.length === 2 && args[1] != true) {
    const callback = (x) => args[1](x);
    
    for (let i = incr-1; i<this.length; i+=incr) {
      tempArr.push(callback(this[i]));
    }

  } else if (args.length === 3 && args[1] === true) {
    console.log("now we should include every item");
    const callback = (x) => args[2](x);

    for (let i = incr-1; i<this.length; i++) {
      if (i % incr == 0) {
        tempArr.push(callback(this[i]));
      } else {
        tempArr.push(this[i]);
      }
    }
  }
  return tempArr;
}

/*export {Array.prototype.divide};
export {Array.prototype.log};
export {Array.prototype.objectify};
export {Array.prototype.flatten};*/
