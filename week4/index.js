var images = []
function startSideShow(){
    images = document.getElementsByClassName("project");
    var index =0;
    var time = 3000;
    images[index].classList.add("active");

    setInterval(()=> {
        images[index].classList.remove("active")
        index++
        if (index === images.length)index = 0;
        images[index].classList.add("active")

    },time)


    //console.log(images);
}

startSideShow()

//implemment class and JSON handling 
//this auto-fill the heading of the BIO


class person{
    constructor(name,titles){
        this.name = name;
        this.titles = titles;
    }
}

//create an instance 
 var me = new person("Abdullah Oriyomi Idris",["A Web Developer","An IT Support Specialist"])
 var title = document.getElementById("title");
 //use localstorage to store the my attributes as a JSON data
localStorage.setItem('me',JSON.stringify(me))
const myTitle_Json = localStorage.getItem('me')
const myTitle =  JSON.parse(myTitle_Json)
// console.log(myTitle.titles[0])

var index =0;
// apply the concepts on the index.html page
function changeTitle(){
    console.log(myTitle.titles[index],index)
    title.textContent = myTitle.titles[index]
    index++ 
    if (index === myTitle.titles.length) index = 0;
    setTimeout(changeTitle,3000)

}
// setInterval(changeTitle, 2000);
window.onload = changeTitle;

