class SortedList {
  constructor( ) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b) {
      return a - b})
    this.length = this.items.length
    return this.items
  }

  get(pos) {
    let value = this.items[pos]
    
    if(pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    return value
  }

  max() {

    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }
    
    let maxNum = 0

    for(let i=0; i<this.length; i++) {
      if(maxNum < this.items[i]) {
        maxNum = this.items[i]
      } 
    }
    
    return maxNum
  }

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }
    
    let minNum = this.items[0];

    for(let i=0; i<this.length; i++) {
      if(minNum >= this.items[i]) {
        minNum = this.items[i]
      } 
    }
    
    return minNum
  }

  sum() {
    let total = this.items.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue
    }, 0)
    return total
  }

  avg() {

    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }

    let total = this.sum()
    return (total / this.items.length)
  }
}

module.exports = SortedList;
