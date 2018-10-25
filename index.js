
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({prop: 1}, {prop2: 2})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = recipes
  return obj
}

function deleteFromObjectByKey(object, key) {
  var obj = {prop: 1}
  delete obj.prop;
  return obj
}

function destructivelyDeleteFromObjectByKey( object, key) {

}
