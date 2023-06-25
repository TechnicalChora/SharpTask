
var from =document.getElementById('addForm');
var itemlist =document.getElementById('items');


from.addEventListener('submit',addItem);
itemlist.addEventListener('click',remove);

function addItem(e){
    e.preventDefault();
    var newItem =document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var deletBtn = document.createElement('button');
    deletBtn.className='btn-danger btn-sm float-right delete';
    deletBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletBtn);
    itemlist.appendChild(li);


}
function remove(e){
   
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);

        }
    }

}
  