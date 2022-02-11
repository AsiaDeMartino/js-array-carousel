const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


//definisco le variabili
const ITEMWRAPPER = document.querySelector(".item-wrapper");



//ciclo for per inserire img
for (let i = 0; i < items.length; i++) {
    const ITEM = document.createElement("div");
    ITEMWRAPPER.append(ITEM);
    ITEM.classList.add("item-" + (i) , "item" );

    let immagini = document.createElement("img");
    immagini.src = items[i];
    ITEM.append(immagini);
}

console.log(ITEMWRAPPER)



