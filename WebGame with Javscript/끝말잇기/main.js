const word = document.querySelector('.input_word')
const submit = document.querySelector('.submit')
const showWord = document.querySelector('.word')

let lastword = "기차"
submit.addEventListener('click', () => {
    let inputword = word.value

    if(lastword[lastword.length-1] === inputword[0]) {
        lastword = inputword
        showWord.textContent = lastword
    }
    else {
        alert("!!!다시 입력해주세요!!!")
    }

    word.value = ''
    word.focus()
})
