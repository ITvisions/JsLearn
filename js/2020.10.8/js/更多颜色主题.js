var select = document.querySelector('select');
var h1 = document.querySelector('h1');

var html = document.querySelector('html');

select.onchange = function() {
    var selectItem = select.value;
    switch(selectItem) {
        case 'tomato': {
            html.style.backgroundColor = 'tomato';
            h1.style.color = 'pink';
            break;
        }
        case 'pink': {
            html.style.backgroundColor = 'pink';
            h1.style.color = 'skyblue';
            break;
        }
        case 'skyblue': {
            html.style.backgroundColor = 'skyblue';
            h1.style.color = 'white';
            break;
        }
        case 'light': {
            html.style.backgroundColor = 'linear-gradient(to right,#3300ff,#33ffff)';
            h1.style.color = '#FF7F00';
            break;
        }
        case 'orange': {
            html.style.backgroundColor = 'orange';
            h1.style.color = '#EED5B7';
            break;
        }
    }
}