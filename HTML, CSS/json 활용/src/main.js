
// Fetch the itmes from the JSON file
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items)
}

// Update the list with the given items
function displayItmes(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__list">
        <span class="item__explain">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// Handle button click
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    
    if(key == null || value == null) {
        return;
    }
    const filtered = items.filter(item => item[key] === value);
    displayItmes(filtered);
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItmes(items));
    buttons.addEventListener('click', ()=>onButtonClick(event, items));
}

// main
loadItems()
.then(items => {
    displayItmes(items);
    setEventListeners(items)
})
.catch(console.log)