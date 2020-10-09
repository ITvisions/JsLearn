var ownname = document.getElementById('ownname');
var submit = document.getElementById('handle');
var show = document.getElementById('story');

var storyText = '今天气温 35 摄氏度，:insertx:出门散步。当走到:inserty:门前时，突然就:insertz:。人们都惊呆了，李雷全程目睹但并没有慌，因为:insertx:是一个 140 公斤的胖子，天气又辣么热。';
let insertX = ['怪兽威利', '大老爹', '圣诞老人'];
let insertY = ['肯德基', '迪士尼乐园', '白宫'];
let insertZ = ['自燃了', '在人行道化成了一坨泥', '变成一只鼻涕虫爬走了'];

submit.addEventListener('click',result);

function formatValue(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

function result() {
    var newStory = storyText;
    let xitem = formatValue(insertX);
    let yitem = formatValue(insertY);
    let zitem = formatValue(insertZ);

    newStory = newStory.replace(/:insertx:/g,xitem);
    newStory = newStory.replace(/:inserty:/g,yitem);
    newStory = newStory.replace(/:insertz:/g,zitem);

    if (ownname.value !== '') {
        let newname = ownname.value;
        newStory = newStory.replace('李雷',newname);
    }

    if (document.getElementById('american').checked) {
        let temperature = Math.round(35 * 9 / 5 + 32) + "华氏度";
        let weight = Math.round(140 * 2.20462) + "磅";
        newStory = newStory.replace(/35 摄氏度/g,temperature);
        newStory = newStory.replace(/140 公斤/g,weight);
    }

    show.textContent = newStory;
    show.style.visibility = 'visible'
}