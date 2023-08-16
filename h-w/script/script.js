//DOM

//document.body.style.backgroundColor = 'red'

// tag name
// id
// class
//_____________
let paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

// console.log(paragraphs[0]);

//_____________
// let classparagraph = document.querySelectorAll('.p1');
// console.log(classparagraph);

// _____________
// let idparagraph = document.querySelectorAll('#p2');
// console.log(idparagraph);

// _____________
// let paragraph = document.querySelectorAll('.block1>p');
// console.log(paragraph);

// _____________
 //let paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);

// for(let elem of paragraphs){
//     console.log(elem),
// }

// _____________

// let paragraph = document.querySelectorAll('p');
// console.log(paragraph);
// paragraphs[0]

// let paragraph = document.querySelectorAll('.p1');
// // console.log(paragraph);

// let paragraph = document.querySelectorAll('#p2');
// console.log(paragraph);

//let paragraph = document.querySelector('#p2');
//console.log(paragraph);

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = "My id is #p2";

//___________
//let paragraph = document.querySelector(".p3");

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<a href="#">Text</a>';

// console.log(paragraph.innerText);

//paragraph.innerText = '<a href="#">Text</a>';

//Задача: Написать программу, которая находит параграф по классу и заменяет в нем текст на “привет”.

// let paragraphs = document.querySelector('.task1');
// paragraphs.innerText = 'hello';
// console.log(paragraphs);
// __________
// let paragraphs = document.querySelectorAll('p');

// console.log(paragraphs);

// paragraphs[1].innerText = 'Hello';
//__________

//Задача: Написать программу, которая находит параграфы и заменяет в каждом из них текст на “привет”.

// let paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);

// for (let elem of paragraphs) {
//     elem.innerText = 'Привет';
//     console.log(elem);
// }
//____________________


// Задача: Написать программу, которая находит параграфы и заменяет в каждом из них текст на “привет”.
// let paragraphs = document.querySelectorAll('p');

// for (let elem of paragraphs) {
//     elem.innerText = 'Hello';
// }
//___________

// let paragraphs = document.querySelectorAll('p');
// //console.log(paragraphs);
// for(let i=0; i<paragraphs.length; i++){
//     console.log(paragraphs[i].innerText)
// }

// //ili

// let paragraphs = document.querySelectorAll('p');
// for (let elemof paragraphs){
//     console.length(elem.innerText),
// }

//__________________

// Задача: Написать скрипт, который находит параграфы и первым 3 параграфам меняет текст на “привет”.
//1 var
//  let paragraphs = document.querySelectorAll('p');

// for(let i=0; i<paragraphs.length; i++){
//     if(i<3) (paragraphs[i].innerText = "hello");
// }

//2var

// let paragraphs = document.querySelectorAll('p');

// for(let i=0; i<3; i++){
//     console.log(paragraphs[i].innerText = "hello");
// }
//___________

// Задача: Написать скрипт, который находит параграфы и последним 3 параграфам меняет текст на указанные пользователем значения.

// let paragraphs = document.querySelectorAll('p');

// console.log(paragraphs);

// for(let i = paragraphs.length-3; i <= paragraphs.length-1; i++){
//     paragraphs[i].innerText = prompt('enter the text');
// }

//ili 

// let paragraphs = document.querySelectorAll('p');

// console.log(paragraphs);

// for(let i = paragraphs.length - 1; i >= paragraphs.length-3; i--){
//         paragraphs[i].innerText = prompt('enter the text');
//     }

// Задача: Написать скрипт, который находит параграфы и четным параграфам меняет текст на 'Я четный';

// let paragraphs = document.querySelectorAll('p');
// // console.log(paragraphs);

// for (let i=1; i< paragraphs.length; i+=2){
//     paragraphs[i].innerText = "Я четный";
// }

//ili

// let paragraphs = document.querySelectorAll('p');

// for (let i=1; i< paragraphs.length; i++){
//     if (i%2==1)
//     paragraphs[i].innerText = "Я четный";
// }

//ili

// let paragraphs = document.querySelectorAll('p');
//  console.log(paragraphs);
//  for(let i = 1; i<paragraphs.length; i++){
//     if(i % 2==1){
// paragraphs[i].innerText = "Я четный";
//     }
//  }

 //ili

// let paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);

// for(let i = 1; i<paragraphs.length; i+=2){
  
// paragraphs[i].innerText = "Я четный";
// }

// __________
//DOMASHKA

// Задача1: Написать скрипт, который находит параграфы и четным параграфам меняет текст на 'Я четный', a нечетным на 'Я нечетный'.

// let paragraphs = document.querySelectorAll('p');
// for( let i = 0; i<paragraphs.length; i++){
//     if(i % 2 ==0){
//         paragraphs[i].innerText = "Я четный";
//     }
//     else{
//         paragraphs[i].innerText = "Я нечетный";
//     }
// }

// Задача2: Написать скрипт, который находит параграфы, которые находятся внутри div-ов и первым 2 параграфам текст меняет на указанные пользователем значения.

// let paragraphs = document.querySelectorAll('#mydiv div p');
//     for(let i=0; i<paragraphs.length; i++){
//         if(i<2) (paragraphs[i].innerText = prompt ('Enter the text!'));
//     }
    
// Задача3: Написать скрипт, который находит параграфы с классом 'p1' и выводит (console) общее содержимое параграфов.

// let paragraphs = document.querySelectorAll('#mydiv div .p1');
// console.log(paragraphs);
// // for(let i=o; i=paragraphs.length; i++){
//     console.log(paragraphs);
// }
   // console.log(paragraphs);

// Задача4: Написать скрипт, который находит параграфы и последним 2 четным параграфам меняет текст на указанные пользователем значения.

// Задача5: Написать скрипт, который находит параграфы и выводит (console) текстовое содержимое начная с 3 параграфа до 6.


