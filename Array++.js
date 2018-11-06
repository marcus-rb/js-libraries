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
