const recipes = [
    { recipe_name: 'Arroz y Habichuelas con Pollo' },
    { recipe_name: 'Sancocho' },
    { recipe_name: 'Lemon Pepper Wet Wings' },
]

const ingredients = [
    { ingredient_name: 'rice', ingredient_unit: 'cups'},
    { ingredient_name: 'beans', ingredient_unit: 'cups'},
    { ingredient_name: 'root veggies', ingredient_unit: 'lbs'},
    { ingredient_name: 'sazon', ingredient_unit: 'packs'},
    { ingredient_name: 'lemon pepper sauce', ingredient_unit: 'cups'},
    { ingredient_name: 'buffalo wing', ingredient_unit: 'wings'},
]

const step_ingredients = [
    //Arroz y Habichuelas con Pollo
    { step_id: 1, ingredient_id: 1, quantity: 1 },
    { step_id: 2, ingredient_id: 1, quantity: 1 },
    { step_id: 3, ingredient_id: 2, quantity: 1.5 },
    //Sancocho
    { step_id: 5, ingredient_id: 3, quantity: 4 },
    { step_id: 6, ingredient_id: 5, quantity: 1 },
    //Lemon pepper Wet Wings
    { step_id: 7, ingredient_id: 6, quantity: 10 },
    { step_id: 8, ingredient_id: 5, quantity: 4 },
]

const steps = [
    //Arroz y Habichuelas con Pollo
    { step_text: 'Cook rice', step_number: 1, recipe_id: 1},
    { step_text: 'Cook beans', step_number: 2, recipe_id: 1},
    { step_text: 'Cook chicken and plate everything together', step_number: 3, recipe_id: 1},
    //Sancocho
    { step_text: 'Boil water', step_number: 1, recipe_id: 2},
    { step_text: 'add root veggies', step_number: 2, recipe_id: 2},
    { step_text: 'Add sazon to taste', step_number: 3, recipe_id: 2},
    //Lemon pepper Wet Wings
    { step_text: 'Cook wings', step_number: 1, recipe_id: 3},
    { step_text: 'Add lemon pepper sauce and plate it', step_number: 2, recipe_id: 3},
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}