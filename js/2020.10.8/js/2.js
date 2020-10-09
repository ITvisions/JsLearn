// 选中的是yes
var mySelected = document.getElementById('yes');

var submitBtn = document.getElementById('myAnswer');

var myWallet = document.getElementById('wallet');

var banlance = 0

submitBtn.addEventListener('click',result)

function result() {
    console.log('123')
    if (mySelected.checked) {
        banlance += 10
    }
    else {
        banlance = 5
    }
    myWallet.textContent = '我的余额：' + banlance
    myWallet.style.visibility = 'visible'
} 