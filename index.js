
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({prop: 1}, {prop2: 2})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = recipes
  obj = { prop: 1, prop2: 2 }
  return obj
}

function deleteFromObjectByKey(object, key) {

}

function destructivelyDeleteFromObjectByKey( object, key) {

}
