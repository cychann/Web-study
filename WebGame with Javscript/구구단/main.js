const textNum = document.querySelector('.text_num')
const submit = document.querySelector('.submit')
const input = document.querySelector('.input_num')
const answer = document.querySelector('.answer')
const make =document.querySelector('.make')

corret_answer = 0
make.addEventListener('click', () => {
    num_1 = Math.floor(Math.random()*8+1)
    num_2 = Math.floor(Math.random()*8+1)
    corret_answer = num_1*num_2
    textNum.textContent = `${num_1} x ${num_2}`
    answer.textContent = ''
})

submit.addEventListener('click', () => {
    let inputNum = input.value

    if(corret_answer === Number(inputNum)) {
        answer.textContent = "정답입니다!"
    }
    else {
        answer.textContent = "땡...다시 도전"
    }

    input.value =''
    input.focus()
})