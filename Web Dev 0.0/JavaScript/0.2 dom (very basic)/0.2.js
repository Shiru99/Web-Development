//##############################################   DOM   #################################################
//                                                           ( Document Object Model )

// console.log(window)

// window.alert(2)
// alert(1111)



//################################  single element selector   ############################################


// // console.log(document.getElementById('my-form'))
// // const form = (document.getElementById('my-form'))

// console.log(document.querySelector('.h1'))  // selects only 1st one.



//################################  multiple element selector ############################################


// console.log(document.querySelectorAll('.item'))        //.class/.id/.tag anything => Better to use.




// // console.log(document.getElementsByClassName('item'))     
// // console.log(document.getElementsByTagName('li')) 
// // console.log(document.getElementById('my-form')) 



//########################################################################################################

// const items = document.querySelectorAll('.item')
// items.forEach((item) => console.log(item));


// const ul = document.querySelector('.items')
// // // ul.remove()
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent='hey...'
// ul.children[1].innerHTML = '<h3>Hmm hmm</h>'

// const btn = document.querySelector('.btn')
// btn.style.background = 'red'



//########################################################################################################


// const btn = document.querySelector('.btn')
// // btn.addEventListener('event',function())       /// 1st one is event 2nd one is fuction on that event

// btn.addEventListener('click',(e) => {
//     e.preventDefault()            // otherwise it will be too fast
//     // console.log('clicked')
//     // console.log(e.target)
//     // console.log(e.target.id)
//     // console.log(e.target.className)


//   document.getElementById('my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark'); // adding style class bg-dark 

//   document.querySelector('.items').lastElementChild.innerHTML = '<h3>Done Done</h>'
// })




//########################################################################################################


// const btn = document.querySelector('.btn')
// btn.addEventListener('mouseover',(e) => {
//     e.preventDefault()         
//   document.getElementById('my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark'); // adding style class bg-dark 

//   document.querySelector('.items').lastElementChild.innerHTML = '<h3>Done Done</h>'
// })


//#######################################################################################################


// const btn = document.querySelector('.btn')
// btn.addEventListener('mouseout',(e) => {
//     e.preventDefault()            
//   document.getElementById('my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark'); // adding style class bg-dark 

//   document.querySelector('.items').lastElementChild.innerHTML = '<h3>Done Done</h>'
// })


//########################################################################################################



// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '')
   {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);        // timeount(function,time in mSec)
   }
 else 
   {
    // Create new list item with user
    const li = document.createElement('li');
    // console.log(li)
    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
   }
}

//########################################################################################################

//########################################################################################################