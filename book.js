class book{
    constructor(
        bookname,
        author,
        title,
        color,
        pages,
        index,
        currentpage,
        readstatus,
        
    )

{

this.bookname = bookname;
this.author = author;
this.title = title;
this.color = color;
this.pages = pages;
this.index = index;
this.currentpage = currentpage;
this.readstatus = readstatus;

}
updatecurrentpage(newcurrentpage) {
    this.currentpage = newcurrentpage;
}

updatereadstatus (newreadstatus) {
    this.readstatus = newreadstatus;
}
}
export default book;


function greeting(yourname) {
    console.log ("Hello " + yourname);
    
}

var name = prompt("what is your name");
greeting(name);


var a = 10;
a++;

document.getElementById("sam").innerHTML = a;