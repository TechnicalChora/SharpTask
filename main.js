const ul=document.querySelector('.list-group');
ul.firstElementChild.textContent = 'Hello';
ul.children[1].style.background='green';
ul.children[2].style.display="none";
ul.children[1].style.color="Green";
var OddEl = document.querySelectorAll(":nth-child(odd)");

for (var i = 0; i < OddEl.length; i++) {
    if(i%2!=0)
    {
        OddEl[i].style.backgroundColor = "green";
    }
    
}

