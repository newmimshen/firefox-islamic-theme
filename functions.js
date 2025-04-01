function chooseLengthOfArray (nameOfSun){ //get length
    return nameOfSun.length;
}

function chooseRandomItem (array,length,minimum){ // get person/image
    return array[Math.floor(Math.random() * length) + minimum];
}

function chooseSun () {
    let p;
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