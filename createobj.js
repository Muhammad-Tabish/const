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



