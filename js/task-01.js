const categoryListEl = document.querySelector('#categories');
const numbersCategories = categoryListEl.children.length;

console.log(`Number of categories: ${numbersCategories}`);

const listItemsEl = categoryListEl.children;

for (const item of listItemsEl) {
    const titleEl = item.firstElementChild;
    const listItemEl = item.lastElementChild.children;
    
    console.log(`Category : ${titleEl.textContent}`)
    console.log(`Elements : ${listItemEl.length}`)
}

