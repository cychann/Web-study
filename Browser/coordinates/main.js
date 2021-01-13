let yValue = 0;
let xValue = 0;

const cursor = document.querySelector('.cursor');
const pixel = document.querySelector('#pixel');
document.addEventListener('mousemove', (e) => {
    yValue = e.pageY
    xValue = e.pageX;
    pixel.innerHTML = `${xValue}px, ${yValue}px`;
})

function resultmove(x) {
    var positionleft = x.clientX;
    var positiontop = x.clientY;

    document.getElementById('pixel').style.left = positionleft +70 + "px";
    document.getElementById('pixel').style.top = positiontop +100 + "px";
}

document.addEventListener('mousemove', resultmove);