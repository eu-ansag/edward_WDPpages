//filename:script4.js
function colorItems() {
  //Select All <li> elements
   let items=document.getElementsByTagName("li");
   
   //loop trough <li> element and change background color
    for (let i = 0; i < items.length; i++) {
     items[i].style.backgroundColor = "lightblue"; //Change Backgroud Color for All items
    }
}