const categoryListEl = document.querySelector('#categories');
const numbersCategories = categoryListEl.children.length;

console.log(`Number of categories: ${numbersCategories}`);

const listItemsEl = categoryListEl.children;

for (const item of listItemsEl) {
    const titleEl = item.querySelector('h2');
    const listItemEl = item.querySelector('ul');
    
    console.log(`Category : ${titleEl.textContent}`)
    console.log(`Elements : ${listItemEl.children.length}`)
}

// const itemsEl = Array.from(categoryListEl.children);

// itemsEl.forEach((item) => {
//     const titleEl = item.querySelector('h2');
//     const listItemEl = item.querySelector('ul');
//     console.log(`Category : ${titleEl.textContent}`)
//     console.log(`Elements : ${listItemEl.children.length}`)
// });
