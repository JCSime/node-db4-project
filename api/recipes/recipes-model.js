function getRecipeById(recipe_id) {
    return Promise.resolve(`amazing recipe with id ${recipe_id}`)
}

module.exports = { 
    getRecipeById 
};