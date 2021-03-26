# WEB технологии

## Упражнение 05.03.2021 

### Agenda

1. Required software installation
  * Nodejs 12 useful link for Ubuntu (https://computingforgeeks.com/how-to-install-nodejs-on-ubuntu-debian-linux-mint/);
  * Nodejs 12 for Windows users https://nodejs.org/en/blog/release/v12.13.0/ 
  * Visual studio code `sudo snap install --classic code`
  * Git
2. Version Control Systems (VCS) and Git [1]
    * Local VCS (пример с GNU)
    * Centralised VCS
    * Distributed VCS
3. Git (Demo)
    * Git Project structure
    * States of files
    * Set up remote repository
    * Demonstrate basic git commands
      * add
      * commit
      * push
      * fetch
      * merge
      * rm
      * revert

### Допълнителни неща за четене
1. Git pro book https://git-scm.com/book/bg/v2
2. Eloquent Javascript https://eloquentjavascript.net/


## Упражнение 12.03.2021
### Javascript Basics
  1. JS in browser
  2. How JS is loaded in the web pages
  2. JS with nodejs
  * Покажи дебъгера във VS Code
  3. Javascript примитиви 
  * `string`
  * `number`
  * `bigint`
  * `boolean`
  * `undefined`
  * `null`
  * Сравняване на примитиви https://javascript.info/comparison
  4. Object <br> An object is collection of properties and has a single prototype object. The prototype can be either object or the `null` value
  5. Prototypes and prototype chain <br> A prototype is a <b> delegation object </b> used to implement prototype-based inheritance.
  6. Classes and inheritance
  * Mixins (horizontal inheritance)
  7. Execution Context
  * Definition -  An execution context is a specification device that is used to track the runtime evaluation of the code.
  * Global Code
  * Function Code
  * Generator function -- keeps the state of execution context
  7. Scopes

### Допълнителни материали за четене
* https://flaviocopes.com/javascript-async-defer/
* http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/
* Slides at https://docs.google.com/presentation/d/16LtvzZJfyjRhsWB4Qrp4lBr-kap_EwF9s2Pi45VOLk4/edit?usp=sharing

### Самостоятелна подготвка
* http://es6-features.org/

## Упражнение 19.03.2021
### Ecmascript 6
1. Въпроси
2. Масиви и `arrow functions`
3. Обхождане на масиви

### Sematic HTML
#### Tags
* article
* aside>
* details
* figcaption
* figure
* footer
* header
* main
* mark
* nav
* section
* summary
* time

1. Защо да използваме семантични тагове?
    * Семантичните тагове са по-четими -> програмистите по-бързо ще се ориентират в съдържанието на дадена страница
    * Семантичните тагове имат някакъв смисъл за разлика от тага `<div>`, който се използва за групиране на html елементи. Те помагат на различните четци на страници да интерпретират по-добре съдържанието им. Използването на тези тагове прави страницата по-лесна за разбиране от хора със зрителни проблеми.
    * Не на последно място различните "търсачки" успяват по-лесно да си направят индексите и -> сайтовете, които използват такива тагове ще бъдат по-напред при търсенето.
    * Документите ще имат по-коснистентна структура в един проект може да срещнете следните ` <div class="header">, <div id="header">, <div class="head">`, което се използва по един и същи начин в различни страници

2. Разликата между `<section>  <article>`
    * An article is intended to be independently distributable or reusable.
    * A section is a thematic grouping of content.
3. `<time>` Използва се, когато искаме да закачим много точна дата до дата, която е в четим формат

### Dom tree
1. Дефиниция

2. Как обхождаме елементите
    * `document.getElementByTag(<tagname>);`
    * `document.getElementByClassName(<className>);`
    * `document.getElementById(<id>);`
    * `document.querySelector(<css Selector>)`

3. Добавяне на елементи
    * `document.createElement(<tagName>)`
    * `element.innerText` vs `element.innerHtml`
    

### Дпълнителни материали
https://www.w3schools.com/html/html5_semantic_elements.asp
https://www.freecodecamp.org/news/semantic-html5-elements/

## 26.03.2021
Very optimistic plan :D
1. DOM допълнение
    * Изтриване на елементи
        * `element.deleteElement`
2. Събития (events)
    * Bubling
3. Modules in JS
    * Common JS modules - Използват се в Nodejs основно, защото ES модулите изискват допълнителни конфигурации. Модулите се зареждат с ключовата дума `require`. Оценката на модула се случва, когато се интерпретатора срещне ключовата дума `require`. Един файл експортва функционалност чрез ключовите думи `exports` `module.exports`. Двете ключови думи за експортване. За повече информация може да разгледате
    https://www.sitepoint.com/understanding-module-exports-exports-node-js/
    * ECMA Script modules - Могат да се използват в брузъра и при nodejs приложения; За сега ще го използваме основно в брузърът, защото се изискват различни настройки в `package.json`.
3. Object Methods
4. CSS grid and flex

### Самостоятелна работa
* Asyncronous javascript
* 

