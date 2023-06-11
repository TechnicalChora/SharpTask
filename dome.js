var itemList = document.querySelector('#items')
console.log(itemList.parentNode)
itemList.parentElement.style.backgroundColor ="blue"
console.log(itemList.parentElement)
console.log(itemList.lastElementChild)
console.log(itemList.children[1])
console.log(itemList.children[1].style.backgroundColor = 'green')
console.log(itemList.firstChild)
console.log(itemList.firstElementChild)
console.log(itemList.nextSibling)
console.log(itemList.previousSibling)
var newDiv = document.createElement('div')
// Add Class
newDiv.className = 'Hello'
// ID
newDiv.id = 'Hello'
// Add attr
newDiv.setAttribute('title', 'Hello Div')
//Create text node
var newDiv = document.createTextNode('Hello World')
//Add text to div
newDiv.appendChild(newDivText)
var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')
console.log(newDiv)
container.insertBefore(newDiv, h1)