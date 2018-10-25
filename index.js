
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({prop: 1}, {prop2: 2})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = recipes
  return obj.prop = 1
}

function deleteFromObjectByKey(object, key) {

}

function destructivelyDeleteFromObjectByKey( object, key) {

}
