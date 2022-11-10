const allCategories = document.querySelectorAll(".item");
const numberOfCategories = allCategories.length;
console.log(`Number of categories: ${numberOfCategories}`);

const listEl = document.querySelector('[id="categories"]');
const titleEl = listEl.children;

for (let i of titleEl) {
  const nameCategoryEl = i.firstElementChild;
  const quantityEl = i.lastElementChild.children.length;
  console.log(`Category: ${nameCategoryEl.textContent}`);
  console.log(`Elements: ${quantityEl}`);
}
