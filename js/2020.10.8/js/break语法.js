var contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975','Jidf:5646154','Vision:4633522','Peter:46512412']

var list = document.querySelector('ul');
for (let i = 0 ; i < contacts.length ; i++) {
    let item = document.createElement('li');
    item.textContent = contacts[i];
    list.appendChild(item)
}

var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.addEventListener('click',result);

function result() {
    var searchName = input.value;
    input.value = '';
    input.focus();

    for (let i = 0 ; i < contacts.length ; i++) {
        var splitContant = contacts[i].split(':');
        if (searchName.indexOf(splitContant[0]) !== -1) {
            para.textContent = splitContant[0] + '\'s number is ' + splitContant[1] + '.';
            para.style.visibility = 'visible'
            break
        }
        else {
            para.textContent = 'Contact not found.'
        }
    }
}
