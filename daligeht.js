// play with event delight
const sections1 = document.getElementById("sec1");
const sections2 = document.getElementById("sec3");
const removeItemList = document.getElementById("removed-item");
const sec1Ul = document.getElementById("fUl");
const ul = document.getElementsByTagName("ul");
let removeItem = "";
console.log(sections1.children[1]);
    sections1.children[1].addEventListener("click", function(event){
    // console.log(event.target.parentNode);
    removeItem =  event.target.parentNode.removeChild(event.target);
    // console.log(removeItem)
    removeItemList.appendChild(removeItem);
    })

    ul[ul.length -1].addEventListener("click", function(event){
    // console.log(event.target.parentNode);
    removeItem =  event.target.parentNode.removeChild(event.target);
    // console.log(removeItem)
    sec1Ul.appendChild(removeItem);
    })

document.getElementById("btn").addEventListener("click", function(){
    const li = document.createElement("li");
    li.innerText = "New added item";
    sec1Ul.appendChild(li);
    // console.log(ul);
})
