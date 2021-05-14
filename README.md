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

## Упражнение 02.04.2021
### Agenda
1. Да се направи код ревю и обяснения по проектите
2. Blocking vs. Non blocking
    * Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring.
3. Асинхронност
    * Много от тежките операции в nodejs(тези, които отнемат повече време) се бавят заради чакането при различни входно изходни операции.
    * Четене и писане във файл // да добавя примери
    * Заявки // добави примери в някое web app-че
    * Evnet loop - Това е механизъм, който позволява на Nodejs да изпълнява non-blocking I/O операции, въпреки че Javascript е еднонишков език.
    Това се случва поради факта, че повечето ядра на операционните системи са многонишкови, т.е. те могат да изпълняват много задачи в бакграунд режим. Когато някои от тези задачи приключи казва на Nodejs-кия процес да изпълни колбеците.
4. Common JS modules in nodejs projects, добавяме го, защото за примерите, ще бъде нужно да се използва `fs`
    * NPM - Package manager for nodejs.
    * package.json - https://nodejs.dev/learn/the-package-json-guide
5. Promise
#### Самостоятелна работа
Промисифайвайнете основните операции за писане и четене. 
#### Допълнителни материали
* Материали за package.json в node js https://nodejs.dev/learn/the-package-json-guide
* Event loop за node js приложения https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

## Упражнение 09.04.2021

1. HTTP (Hypertext Transfer Protocol) 1.1
    * Интуитивна дефиниция - Протокол за пренасяне на хипермедийни файлове като HTML страници. Първоначалният замисъл на HTTP е да се използва за комуникация между браузъри и уебсървъри, но той се използва и за комуникация между различни сървъри и сървиси. HTTP следва моделът клиент-сървър. Клиентските прилжения отварят връзка към сървър и изпраща заявка към него. След това чака докато получи отговор или съобщение за грешка. В HTTP сървърите не се пази клиентско състояние(Stateless). HTTP прави връзка със сървър приложенията чрез or TCP/IP или TLS-encrypted TCP връзка, мрежовия протокол, което означава, че може да се счита за сигурен начин за комуникация, защото не се губят съобщения без да се хвърли някаква грешка както може да се случи с UDP протокола. 
    * Структура 
        * HTTP Method
        * Header
        * Body

    * HTTP Methods (https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)
        * GET - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
        * HEAD - The HEAD method asks for a response identical to that of a GET request, but without the response body.
        * POST - The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
        * PUT - The PUT method replaces all current representations of the target resource with the request payload.
        * DELETE - The DELETE method deletes the specified resource.
        * PATCH - The PATCH method is used to apply partial modifications to a resource.
    * Структура на HTTP заявка (Mozila devs)
        * A start-line describing the requests to be implemented, or its status of whether successful or a failure. This start-line is always a single line.
        * An optional set of HTTP headers specifying the request, or describing the body included in the message.
        * A blank line indicating all meta-information for the request has been sent.
        * An optional body containing data associated with the request (like content of an HTML form), or the document associated with a response. The presence of the body and its size is specified by the start-line and HTTP headers.

2. REST API
    * API - Понятието идва от (Application Programming Interface). Представлява нещо като сделка между отделни софтуерни компоненти, които трябва да си комуникират.
    * REST идва от "Representational State Transfer". Като цяло представлява множество от правила и насоки, които да бъдат спазвани от програмистите при проектирането на API. За да наречем едно API REST то трябва да се подчинява на опрделени правила:
        * Трябва да се използва HTTP като комуникационен протокол
        * Трябва да бъде стейтлес комуникацията,т т.е. всяка заявка се разглежда без да се има предвид какви са били предните заявки
        * Структурата на сървъра не трябва да влияе на това как клиентските приложения достъпват API-а.
    * Съвети при изграждането
3. Express JS
    * Hello World example
    * Test API
        * Postman
        * Fetch API

### Използвани материали
* HTTP - https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
* REST - https://www.redhat.com/en/topics/api/what-is-a-rest-api
* Express JS - https://expressjs.com/

### Проблем:
Проблемът, на който се натъкнахме на упражнението беше, че не съм използвал грешния метод за четене на файлове.

## Упражнение 16.04.2021

1. Заявки от браузъра
    * CORS - Header базиран механизъм, който позволява на сървъра да индикира на някой друг origin да не зарежда данните, които са получени като резултат от заявката.
        * preflight request - заявка, която се прави преди да се направи CORS заявка. Целта на предварителната заявка е да се провери дали сървърът ще разреши изпълнението на последващата заявка
        * Как да се справим с CORS в еxpress https://github.com/expressjs/cors
    * AJAX 
    * Fetch API
    * Angular's HTTP Client

2. Typescript -
    * Какво е Typescript и защо ни е да го използваме
        * Език, надмножество на JavaScript
        * Следи за правилната форма на данните
        * Компилира (транспилира) се до JavaScript, който след това се изпълнява от Javascript компилаторите
        * Цел - да може да се типизира (почти) всичко, написано на JavaScript
    * Как да използваме typescript
        * `tsc`
        * `ts-node`
    * Статично типизиране
        * Всяка променлива има зададен тип по време на компилация
        * Имаме гаранция, че стойност от друг тип не може да бъде присвоена на променливата
    * Структурно типизиране
        * Следим полетата на типовете, а не имената им
        * Можем да зададем стойност от тип `А` на променлива `Б`, ако полетата на `Б` са <strong>подмножество</strong> на полетата на `А`
        * По-различно е от това: На стойност от тип `А` можем да зададем тип `Б` само ако `А` съвпада или е наследник на `Б`
    * Базови типове:
        * `boolean`
        * `number`
        * `string`
        * `Т []`
        * Наредени н-торки `[T, K0, ..., Kn]` и каквито комбинации се сетите
        * `any` - не е препоръчително да се използва, защото губим добрите свойства, които получаваме от Typescript
    * Типове от една стойност 
        * В TS може да имаме типове, които приемат точно определена стойност `const a: true = true` а може да приеме само стойност `true` без да се хвърли грешка от компилатора.
        * `undefined`
        * `null`
    * Interface - описват структурата на обект
        `interface Person {
            name: string
        }`
    * Type - описват структурата на обект
    * Interface vs Type // Демо за това как се разширяват
    * Union types
    * Intersection types
    * Контекстни типове `(user: { firstName: string}) => void`
    * Опционални топове  `interface Person { car?: Car}` пропъртито car може да бъде от тип `Car` или `undefined`
    * Classes // show demo
2. Разширяване на функционалността на сървъра
    * Mock DB service


## Упражнение 07.05.2021
### ORM

1. Предварителни задачи:
    - избор и инсталиране на сървър(MongoDb, Postgres), зависи какво си изберете
    - инсталиране на postgres за [Linux](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04) и [Windows](https://www.postgresql.org/download/)
    - инсталиране на [mongodb](https://docs.mongodb.com/guides/server/install/)

2. MongoDB 
    - NOSQL база данни. Печелим от това, че мислим за данните в JSON формат, т.е. не мислим за релациите и последващите свързвания на данните.
    - Документния модел на представяне на данните се мапва лесно до обекти особено в JS/TS
    - Основните разлики между SQL и NoSQL  базите може да видите [тук](https://www.mongodb.com/nosql-explained/nosql-vs-sql)
3. Полезни команди:
    - show dbs
    - show collections
    - db.collection.find()
    - db.collection.find({conditions}, {keys})
    - db.collection.find({$or: [cond1, cond2, ...condN]})
    - добави данни в колекцията
    - изтрий нещо от колекцията
3. Дефиниция
Ресурс, от който да разгледате ORM: https://www.sitepoint.com/javascript-typescript-orms/


## Упражнение 14.05.2021
### Сигурност при уеб приложенията

1. Как различаваме потребителите
    - <strong> Автентикация </strong> - процес, при който се проверява идентичността на потребител или устройство. Най-популярният и лесен начин за автентикиране е чрез комбинация на потребителско име и парола.
    - <strong> Оторизация </strong> - процес, при който се определя какви привилегии има даден потребител, който преди това е автентикиран.

2. Важни понятия:
    - Хедъри
    - Бисквитки - HTTP бисквитката представлява данни, които сървърът изпраща на уеб браузърът на потребителя, данните са в следния формат <em>(Key, Value)</em>. Браузърът може от своя страна да ги запази и да ги изпрати в последваща заявка. Бисквитките имат различна продължителност на живот, който се определя по 2 начина:
        - <em> Сесийни бисквитки </em>
        - <em>Max-Age</em>
2. Автентикация - Процесът представлява изпращане на потребителско име и парола, чрез POST заявка, за да може да потребителската информация да бъде скрита в тялото на заявката и да не може да се кешират данните за потребителите или да се запишат пторебителското име и паролата в историята на браузърът.
    - Сървърът, чрез който ще се автентикират потребителите трябва да бъде запазва данните за потребите в специфична релация, в която паролата на потребителя трябва да бъде хеширана чрез достатъчно сложен алгоритъм за хеширане(bcrypt е добър пример за алгоритъм за хеширане на пароли). Хеширането на пароли се използва, за да може да предпазим потребителите в случай, че някой успее да извлече данни от релацията за пторебителите, да не може да използва по.
3. Оторизация - Съществуват няколко начина за оторизация на потребители:
    - Клиентското приложение изпраща на всяка заявка комбинация от потребителското име и парола. Това не е добро решение, защото при GET заявките името и паролата ще бъдат кодирани в URL-a на заявката, следователно ще трябва да използваме POST заявки. Второ за всяка заявка ще трябва да се хешира паролата, за да бъде сравнявана с тази, която е записана. От друга страна този подход ни дава възможност лесно да прекратим достъпа на конкретен потребител до системата.
    - Поддържане на потребителски сесии - https://expressjs.com/en/resources/middleware/session.html
    - Използване на жетони (JWT)


Useful links for CI/CD:
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04
- https://dev.to/ibmdeveloper/dockers-and-dad-jokes-how-to-containerize-a-reactjs-application-5no // for react apps