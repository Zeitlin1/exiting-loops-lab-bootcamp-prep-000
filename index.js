function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] !== stopValue) {
    array[i] = changeValue
  } else
    return array
    }
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] == skipValue) {
      continue
    }
    array[i] = changeValue
  }
    return array
}



function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
}

function findFn(array, value) {
  for (i = 0, l = array.length; i < l; i++){
   if (array[i] == value) {
    return value
  }
   }
 }
