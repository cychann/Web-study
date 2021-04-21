const result = document.querySelector('.result')
const input = document.querySelector('.input')
const submit = document.querySelector('.submit')
let answerNum = ''

function makeNum() {
    answerNum = ''
    for(let i=0; i<4; i++) {
        answerNum += Math.floor(Math.random() * 10)
    }
}

makeNum()

let count = 0

submit.addEventListener('click', () => {
    inputNum = input.value
    if(inputNum === answerNum) {
        result.textContent = "정답입니다!"
        makeNum()
    }
    else {
        count += 1
        if(count >= 10) {
            result.textContent = "10번의 기회를 모두 소진하였습니다 ㅠ.ㅠ 다시 도전해보세요! 이전 게임과는 다른 숫자를 뽑아놨습니다. 입력창에 원하는 숫자를 입력해주세요!"
            makeNum()
            count = 0
        }
        else {
            let ball = 0
            let strike = 0
            for(let i=0; i<4; i++) {
                if(answerNum[i] === inputNum[i]) {
                    strike += 1
                }
                else if(inputNum.indexOf(answerNum[i]) !== -1) {
                    ball += 1
                }
            }
            result.textContent = "스트라이크 : " + strike + " 볼 : " + ball
        }
    }

    input.focus()
    input.value = ''
})