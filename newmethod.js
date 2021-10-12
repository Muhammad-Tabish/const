const laptop = {
    name = "asus",
    color = "grey",
    shape = "rectangle",
    size = 18,

      
filled: true,
togglelaptop : function (laptopstatus) {
    
    this.filled = laptopstatus;
}
};

document.getElementById("demo").innerHTML = 10 + 5;
console.log(laptop.color);
console.log(this.togglelaptop);