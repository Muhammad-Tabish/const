import book from "./book";


const backpack = {
    name: "tab",
    year: 1996,
    model: 2021,
    manufacture: "England",
    size:{
        length: 75,                                                                                                                                                                                                     
        height: 850,
    },

lidopen : false,
toggleLid : function (lidstatus){
    this.lidopen = lidstatus;

}
};

console.log("the backpack model is : ", backpack.manufacture);

console.log("the backpack height is : ", backpack.size.height);
console.log("live");


alert('test')




const tiger = new book(
    "tabish",
    "emman",
    "black",
    365,
    "1001",
    365,
    "finished"
);
console.log(tiger);


const lion = new book(
    "sam",
    "emman",
    "red",
    355,
    "1001",
    365,
    "finished"
);
console.log(lion);



const monkey = new book(
    "dam",
    "king kong",
    "black",
    444,
    "2000",
    255,
    "finished"
);
console.log(monkey);



const whitetiger = new book(
    "tiger",
    "strong",
    "white",
    365,
    "1001",
    365,
    "not-finished"
);
console.log(whitetiger);



const elephant = new book(
    "ele",
    "small",
    "cementcolor",
    365,
    "1001",
    365,
    "finished"
);
console.log(elephant);