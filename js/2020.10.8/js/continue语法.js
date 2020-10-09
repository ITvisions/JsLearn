var para = document.querySelector('p');
var btn = document.querySelector('button');
var text = document.querySelector('input');

btn.addEventListener('click',result)

function result() {
    var num = text.value
    for (let i = 1 ; i <= num ; i++) {
        var sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
            continue;
        }
        para.textContent += i + ' ';
    }
}
