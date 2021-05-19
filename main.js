// // > Sur base de l'html fourni :

// // # 1. En utilisant une boucle pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de lancer une function du nom de sayMyName qui affiche une alert du texte du li sur le quel on clique.

// // # 2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)

// // # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser

// //exo1

// // let exo1 = Array.from(document.querySelector('ul').children);
// // console.log(exo1);

// // function sayMyName() {
// //     alert(this.innerHTML)
// // }

// // //exo2

// // function modify() {
// //     this.innerHTML = prompt('Quel nouveau nom voulez vous mettre?')
// // }

// // exo1.forEach(element => {
// //     // element.addEventListener('click', sayMyName)
// //     element.addEventListener('dblclick', modify)
// // });


// // //exo3
// // // # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser

// // let btn = document.querySelectorAll('input')[2];
// // let li1 = document.querySelectorAll('input')[0];
// // let li2 = document.querySelectorAll('input')[1];

// // let echanger = (element1, element2) => {
    
// //     [element1] = [element2]
// // }

// // btn.addEventListener('click', function () {echanger(li1, li2)})


// //correction


// // let allLi = document.querySelector('li');

// // let button = document.querySelectorAll('input')[2]

// // let liIndexA, liIndexB, temp;

// // button.addEventListener('click', () => {
// //     allLi.forEach(element => {
// //         let inputA = document.querySelector('#li-one').value;
// //         let inputB = document.querySelector('#li-two').value;
// //         if (element.innerHTML == inputA) {
// //             liIndexA = allLi.indexOf(element);
// //         } 
// //     })
// //     allLi.forEach(element => {
// //         if (element.innerHTML == inputB) {
// //             liIndexB = allLi.indexOf(element)
// //         } 
// //     })
// //     [allLi[liIndexA], allLi[liIndexB]] = [allLi[liIndexB], allLi[liIndexA]]
// // })

// ///correction ilyas

// //declarer les li - conteint un array de tous les LI qui sont enfant de UL
// let lesLis = Array.from(document.querySelector('ul').children);

// //declarer les element pour echanger les noms
// // function inverMe pour inverser
// function invertMe(){
//     //declaration de variable a utilser plus tard
//     let x;
//     let y;
//     //input 1 = valeur du premier choix
//     let input1 = document.querySelector('#li_one').value;
//     //valeur du deuxieme choix
//     let input2 = document.querySelector('#li-two').value;
//     let index1;
//     let index2;
//     lesLis.forEach(element => {
//         //rendre un true or false - conditions
//         let test = element.innerHTML == input1;
//         if (test === true) {
//             x = element.innerHTML;
//             index1 = lesLis.indexOf(element);
//         }
//         let test2 = element.innerHTML == input2;
//         if (test2 === true) {
//             y = element.innerHTML;
//             index2 = lesLis.indexOf(element);
//         }
//     });
//     lesLis[index1].innerHTML = y;
//     lesLis[index2].innerHTML = x;
// }
// let btn = document.querySelectorAll('input')[2];
// btn.addEventListener('click', invertMe);


//correction MITSU

let liArr = Array.from(document.querySelector('ul').children);
let btn = document.querySelectorAll('input')[2];
let input1;
let input2;
let counter;


function inversion(para1, para2) {
    liArr.forEach((element,i) => {
    if (element.innerHTML == para1) {
        element.innerHTML = para2;
        counter = i;
    }
});
    liArr.forEach((element,i) => {
    if (element.innerHTML == para2 && counter != i) {
        element.innerHTML = para1;
    }
});
}

btn.addEventListener('click', () => {
    input1 = document.querySelector('#li-one').value;
    input2 = document.querySelector('#li-two').value;
    inversion(input1, input2);
})

