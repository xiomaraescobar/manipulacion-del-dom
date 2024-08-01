// aqui estamos navegando accediendo  de padres a hijos en el DOM

const parent = document.getElementById("parent"); //aqui estamos declarando una constante parent y estamos accediendo a ella a traves de document.getElementById 
console.log(parent); // esto lo podemos ver en la consola del navegador

// children; // live HTMLCollection
/*const children = parent.children;// con este metodo parent.children le decimos que nos traiga a los hijos
console.log(children);

// firstChild; // live NodeList
const firstChild  = parent.firstElementChild; // con este metodo le digo que me traiga al primer hijo
console.log(firstChild);

// lastChild; // live NodeList
const lastChild = parent.lastElementChild;// ultimo hijo
console.log(lastChild);

// previousSibling; // live NodeList
const previousSibling = parent.previousElementSibling;// con el metodo previousSibling estamos accediendo al hermano del padre ( el elemento que esta en la misma posicion pero que no es hijo ) o tambien conocido como el tio de los hijos de parent. 
console.log(previousSibling);

// nextSibling; // live NodeList
const nextSibling = parent.nextElementSibling; //nextSibling le dice que nos lleve al siguiente familiar 
console.log(nextSibling);

// childNodes; // live NodeList
const childNodes = parent.childNodes; // con el metodo chilNodes obtenemos todos los nodos hijos, incluyendo nodos de texto y comentarios
console.log(childNodes);

// firstElementChild; // non-live HTMLCollection
const firstElementChild = parent.firstElementChild;
console.log(firstElementChild);//siguiente pariente cercano

// nextElementSibling; // non-live HTMLCollection
const nextElementSibling = parent.nextElementSibling;//siguiente elemnto hermano
console.log(nextElementSibling);

// lastElementChild; // non-live HTMLCollection
const lastElementChild = parent.lastElementChild; //lastElementChild accede específicamente al último elemento hijo de un nodo padre, excluyendo otros tipos de nodos como nodos de texto o comentarios.
console.log(lastElementChild);

// previousElementSibling; // non-live HTMLCollection
const previousElementSibling = parent.previousElementSibling;//accede al hermano anterior de un elemento específico, excluyendo nodos que no son de tipo elemento, como textos y comentarios.
console.log(previousElementSibling);*/


// apartir de aqui vamos a aprender a como seleccionar de hijo  a padres

const children2 = document.querySelector("li") 
console.log(children2);

const parent2 = children2.parentNode;// children2.parentNode quiere decir que de la posicion en la que estoy quiero que me traigas al padre de este elemento (traeme al nodo padre)
console.log(parent2);

const grandParent = children2.parentElement;//traeme al elemnto padre
console.log(grandParent);

const grandGrandParent = children2.closest("menu"); // de children2 que es  el elemento hijo quiero que me traigas al elemento que sea o se parezca al elemento de menú..traeme al bizabuelo este último es el más utilizado
console.log(grandGrandParent);

// parentNode; // live NodeList
const parentNode = children2.parentNode;
console.log(parentNode);

// parentElement; // non-live HTMLCollection
const parentElement = children2.parentElement;//parentElement  obtiene el elemento padre de un nodo del DOM referido por la variable children2
console.log(parentElement);

// closest(selector); // este último es el más utilizado

const parent3 = children2.closest("menu");//busca el ancestro mas cercano que coincida con el selector en este caso (menu)
console.log(parent3);
