const btn = document.querySelector('.plus__btn');
const input = document.querySelector('.add');
const list = document.querySelector('.list');
const tresh = document.querySelector('i');
let cnt = 0;

input.value = null;

btn.addEventListener('click', () => {
    additem();
})


function additem() {
    const AddList = document.createElement('li');
    AddList.setAttribute('class', 'list__gropu-item');
    AddList.setAttribute('id', 'li'+cnt);
    AddList.innerHTML = input.value;
    AddList.innerHTML += "<i class='fas fa-trash-alt' onclick='removeitem("+cnt+")'></i>";
    list.append(AddList);
    cnt++;
    input.value = '';
    input.focus();
}

function removeitem(cnt) {
var li = document.querySelector('#li'+cnt);
list.removeChild(li);
}

function enter() {
    if(window.event.keyCode == 13){
        additem();
    }
}