var customname = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

let storyText = '今天气温 35 摄氏度，:insertx:出门散步。当走到:inserty:门前时，突然就:insertz:。人们都惊呆了，李雷全程目睹但并没有慌，因为:insertx:是一个 140 公斤的胖子，天气又辣么热。';
let insertX = ['怪兽威利', '大老爹', '圣诞老人'];
let insertY = ['肯德基', '迪士尼乐园', '白宫'];
let insertZ = ['自燃了', '在人行道化成了一坨泥', '变成一只鼻涕虫爬走了'];

randomize.addEventListener('click',result);

function randomValueFromArray(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

function result() {
    let newStory = storyText;

    let xitem = randomValueFromArray(insertX);
    let yitem = randomValueFromArray(insertY);
    let zitem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:',xitem);
    newStory = newStory.replace(':insertx:',xitem);
    newStory = newStory.replace(':inserty:',yitem);
    newStory = newStory.replace(':insertz:',zitem);

    if(customname.value !== '') {
        const name = customname;
        newStory.replace('李雷',name);
    }

    if(document.getElementById('american').checked) {
        let temperature = Math.round(35*9/5 +32) + '华氏度';
        let weight = Math.round(140 * 2.20462) + '磅';
        newStory = newStory.replace('35 摄氏度',temperature);
        newStory = newStory.replace('140 公斤',weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}