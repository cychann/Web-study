const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    // 1. text
    const text = input.value;
    if(text === '') {
        input.focus();
        return;
    }
    // 2. make item
    const item = createItem(text);
    // 3. add item in items container
    items.appendChild(item);
    // 4. add item scrolling
    item.scrollIntoView({block: 'center'});
    // 5. input reset
    input.value ='';
    input.focus();
}

let id = 0;
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <div class="item__divider"></div>
    `
    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
})

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        onAdd();
    }
})

items.addEventListener('click', (event) => {
    const id = event.target.dataset.id
    if(id){
        const toBoDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBoDeleted.remove();
    }
})