![an example of add-on](https://github.com/newmimshen/13-sun-daily-islamic-firefox-theme/blob/c7dd20fa951e39833154bdb17918f4224f6efb8e/1.PNG)
# 13 Sun theme(adds-on)
* Saturday  : Prophet Mohammad
* Sunday    : Imam Ali
* Monday    : Hasanain (Imam Hasan & Imam Hussain)
* Tuesday   : Imam Sajjad & Imam Bagir & Imam Sadiq
* Wednesday : Imam Kazim & Imam Reza & Imam Javad & Imam Hadi
* Thursday  : Imam Hasan Askari
* Friday    : Hojjat ibn al-Hasan (12th Imam)

##### According to a Hadith:  
He added: According to the words of Imam Hadi (AS), Saturday is named after the Prophet Muhammad (PBUH), Sunday for Amir al-Mu'minin Ali (AS), Monday for Imam Hasan al-Mujtaba and Imam Husayn (AS), Tuesday for Imam Zain al-Abidin, Imam Muhammad al-Baqir, and Imam Ja'far al-Sadiq (AS), Wednesday for Imam Musa al-Kadhim, Imam Reza, Imam Muhammad al-Jawad, and Imam Hadi (AS), Thursday for Imam Hasan al-Askari (AS), and Friday is the day of Imam al-Mahdi (AJ).

## List of content
1. #### Code review
2. #### Challenges
3. #### Plans for next versions
4. #### Techs used in this project
5. #### About me (a word with you)


## Code review
i tried to practice **Clean Code** and **Kiss** principles as much as i can.  
i divided the base code to three files:  
* variables.js
* functions.js
* sun-persons.js (index)  

the first two files in the list, each are around 30 lines.  
file names include: images, folders, etc are kebab case. 
function and variable names are camel case.  
i could create a class to handle images and persons in sunPersons array but i kept it simple and i wish i have a functional project.  
i tried to set relevant names like:
* persons for an array of 13 Suns:
```javascript
const persons = ['nabi', 'ali', 'hasan', 'hussain', 'sajjad', 'bagir', 'sadigh', 'kazim', 'reza', 'javad', 'hadi', 'askari' ,'hojjat'];
```
<br>
<br>
<br>

* chooseLengthOfArray for setting maximum of an array:
```javascript
function chooseLengthOfArray (nameOfSun){ //get length
    return nameOfSun.length;
}
```
<br>
<br>
<br>

* chooseRandomItem to select an Item within an array:
```javascript
function chooseRandomItem (array,length,minimum){ // get person/image
    return array[Math.floor(Math.random() * length) + minimum]; 
    // length represents to number of persons that fits in a day, for example wednesday has 4 persons, so length = 4, in this example minimum should be 7, because 7 first persons were used in previously days.
    // if our random number be 3 {0-3} + 7 = 10, 10th person in persons array is Imam Hadi
}
```
<br>
<br>
<br>

* chooseSun to select a person img(main function):
```javascript
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
```

That's All!

## Challenges
- First of all i couldn't use firefox console, it's a bit complicated, i tried several explained ways but just one of em was a bit useful to me, and that is:    
<a href="https://stackoverflow.com/questions/47143453/firefox-console-referenceerror-browser-is-not-defined" target="_blank">firefox console referenceerror browser is not defined</a>

i just could use *add-on console* that has limited abilities.  
therefore most of my debugging process was via my phpstorm ide.

- **import/export**, to connect js files caused error in temporary add-on installation within **about:debugging**, so i kept its version in development branch and pushed its **free import/export** version to publishing branch.

- i tested if in manifest.json file, i put file names randomly what happens, it was amazing because i figured out i have to put them in order of their definition, i mean i had to reference variables first, then functions and at the end i call them in index.js file.

## Plans for next versions
* [ ] for version 2, i plan to add images of Harameyn(shrines) of each suns for when the browser is inactive, but this is a challenge as i mentioned it before. i hope i do it
 
## Techs used in this project
1. photoshop: to resize images
2. functional base programming
3. pure js
4. APIs
5. Git

## About me 
my name is Mohammad Sharafi, I am a Proud Iranian Shi'a Muslim, i am both programmer and Photoshop editor or call it Graphic Visual Artist or whatsoever!
this project was my first project that i created a cool Readme file for it.
i lost my previously account @mmdshen due to losing my 2fa app

i tried to this project be 10/10,  
there is no add-on in **firefox add-ons** like this unfortunately.  
if you vote me 5 stars in firefox add-ons you just encouraged me and i Appreciate that.

i created this file via Markdown Monster App.

Sincerely  
Mohammad
