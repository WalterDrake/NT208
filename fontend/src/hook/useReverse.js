// reverse map
Array.prototype.reverseMap = function(callback) {
    const newArray = []
    for(let  i = callback.length - 1; i >= 0; i--) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}