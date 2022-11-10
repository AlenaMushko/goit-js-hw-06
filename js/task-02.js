const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector('[id="ingredients"]');

const onIngredientsList = ingredients.map((option) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = option;
  return ingredientEl;
});

ingredientsEl.append(...onIngredientsList);
