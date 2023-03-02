const itemEls = document.querySelectorAll('.item');
console.log('Number of categories:',itemEls.length);

const titleEls = document.querySelectorAll('h2');

titleEls.forEach(element => {
    console.log('Category:', element.textContent);
    console.log('Elements:', element.nextElementSibling.children.length);  
});