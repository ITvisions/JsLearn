function createP() {
    let para = document.createElement('p');
    para.textContent = 'you click it'
    document.body.appendChild(para)
}

const buttons = document.querySelectorAll('button');

for (let i = 0 ; i < buttons.length ; i++) {
    buttons[i].addEventListener('click',createP)
}