let sunTheme = {
    images: {
        additional_backgrounds: ["/img/imam-ali-theme.png"]
    },
    colors: {
        frame: "#ffffff",
        tab_background_text: "#111",
        frame_inactive: "green",
    },
    properties: {
        additional_backgrounds_alignment:['left top']
    }
    };

// const weekDays = ['yekshanbe', 'doshanbe', 'seshanbe','chaharshanbe', 'panjshanbe', 'jome', 'shanbe'];
const sunPersons = {
    nabi: ['/img/selected/payambar/1.png', '/img/selected/payambar/2.png'],
    ali: ['/img/selected/imam-ali/1.png', '/img/selected/imam-ali/2.png', '/img/selected/imam-ali/3.png'],
    hasan: ['/img/selected/imam-hasan/1.png', '/img/selected/imam-hasan/2.png'],
    hussain: ['/img/selected/imam-hussain/1.png', '/img/selected/imam-hussain/2.png'],
    sajjad: ['/img/selected/imam-sajjad/1.png','/img/selected/imam-sajjad/2.png', '/img/selected/imam-sajjad/3.png', '/img/selected/imam-sajjad/4.png'],
    bagir: ['/img/selected/imam-bagher/1.png', '/img/selected/imam-bagher/2.png', '/img/selected/imam-bagher/3.png'],
    sadigh: ['/img/selected/imam-sadegh/1.png', '/img/selected/imam-sadegh/2.png', '/img/selected/imam-sadegh/3.png', '/img/selected/imam-sadegh/4.png'],
    kazim: ['/img/selected/imam-kazem/1.png', '/img/selected/imam-kazem/2.png', '/img/selected/imam-kazem/3.png'],
    reza: ['/img/selected/imam-reza/1.png', '/img/selected/imam-reza/2.png', '/img/selected/imam-reza/3.png'],
    javad: ['/img/selected/imam-javad/1.png', '/img/selected/imam-javad/2.png', '/img/selected/imam-javad/3.png', '/img/selected/imam-javad/4.png'],
    hadi: ['/img/selected/imam-hadi/1.png', '/img/selected/imam-hadi/2.png', '/img/selected/imam-hadi/3.png', '/img/selected/imam-hadi/4.png', '/img/selected/imam-hadi/5.png'],
    askari: ['/img/selected/imam-askari/1.png', '/img/selected/imam-askari/2.png', '/img/selected/imam-askari/3.png', '/img/selected/imam-askari/4.png'],
    hojjat: ['/img/selected/imam-zaman/1.png', '/img/selected/imam-zaman/2.png']
};
const persons = ['nabi', 'ali', 'hasan', 'hussain', 'sajjad', 'bagir', 'sadigh', 'kazim', 'reza', 'javad', 'hadi', 'askari' ,'hojjat'];
let time = new Date().getDay();
p = persons [Math.floor(Math.random() * 2)+2];
function chooseLengthOfArray (nameOfSun){ //get length
    return nameOfSun.length;
}
function chooseRandomItem (array,length,minimum){ // get person/image
    return array[Math.floor(Math.random() * length) + minimum];
}

function chooseSun () {
    switch(time){
        case 0:
            sunTheme.images.additional_backgrounds = [chooseRandomItem(sunPersons.ali,chooseLengthOfArray(sunPersons.ali),0)];
            break;
        case 1:
            p = chooseRandomItem(persons,2,2);
            sunTheme.images.additional_backgrounds = [sunPersons[p][Math.floor(Math.random() * chooseLengthOfArray(sunPersons[p]))]];
            break;
        case 2:
            p = chooseRandomItem(persons,3,4);
            sunTheme.images.additional_backgrounds = [sunPersons[p][Math.floor(Math.random() * chooseLengthOfArray(sunPersons[p]))]];
            break;
        case 3:
            p = chooseRandomItem(persons,4,7);
            sunTheme.images.additional_backgrounds = [sunPersons[p][Math.floor(Math.random() * chooseLengthOfArray(sunPersons[p]))]];
            break;
        case 4:
            sunTheme.images.additional_backgrounds = [sunPersons.askari[Math.floor(Math.random() * chooseLengthOfArray(sunPersons.askari))]];
            break;
        case 5:
            sunTheme.images.additional_backgrounds = [sunPersons.hojjat[Math.floor(Math.random() * chooseLengthOfArray(sunPersons.hojjat))]];
            break;
        case 6:
            sunTheme.images.additional_backgrounds = [sunPersons.nabi[Math.floor(Math.random() * chooseLengthOfArray(sunPersons.nabi))]];
            break;
    }
}
chooseSun();//debugged
browser.theme.update(sunTheme);
//console.log(sunTheme.images.additional_backgrounds);
//console.log(Math.floor(Math.random() * 2));
//console.log(time);
//console.log(chooseRandomItem(persons,4,7));
//console.log(sunTheme);