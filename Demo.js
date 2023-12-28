const main_heading = document.querySelector('#main-heading');
main_heading.style.textAlign='right';
const fruits =document.querySelector('.fruits');

fruits.style.background='grey';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50';
fruits.style.borderRadius='5px';
fruits.style.listStyleType='none';

// const fruit1 =document.querySelector('.fruit:nth-child(1)');
// fruit1.style.background='white';
// const fruit3 =document.querySelector('.fruit:nth-child(3)');
// fruit3.style.background='white';
// const fruit2 =document.querySelector('.fruit:nth-child(2)');
// fruit2.style.background='brown';
// const fruit4 =document.querySelector('.fruit:nth-child(4)');
// fruit4.style.background='brown';

// fruit1.style.padding='10px';
// fruit1.style.margin='10px';
// fruit1.style.borderRadius='5px';
// fruit2.style.padding='10px';
// fruit2.style.margin='10px';
// fruit2.style.borderRadius='5px';
// fruit3.style.padding='10px';
// fruit3.style.margin='10px';
// fruit3.style.borderRadius='5px';
// fruit4.style.padding='10px';
// fruit4.style.margin='10px';
// fruit4.style.borderRadius='5px';
const fruitsItems = document.querySelectorAll('.fruit');
for(let i=0; i<fruitsItems.length; i++)
{
	fruitsItems[i].style.background='white';
	fruitsItems[i].style.padding='10px';
	fruitsItems[i].style.margin='10px';
	fruitsItems[i].style.borderRadius='5px';
}
const fruitsItemsOdd = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0; i<fruitsItemsOdd.length; i++)
{
	fruitsItemsOdd[i].style.background='brown';
	
}
const basket_heading = document.querySelector('#basket-heading');
basket_heading.style.color='brown';
basket_heading.style.marginLeft='30px'


