var recipes = {"pizza": "cheese", "burger": "beef"}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, {"sandwich": "salami"})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes.cereal = "milk"
  return recipes
}

function deleteFromObjectByKey(object, key){
  var newRecipe = Object.assign({}, recipes, {"pasta": "sauce"})
  delete newRecipe.pasta
  return newRecipe
}
