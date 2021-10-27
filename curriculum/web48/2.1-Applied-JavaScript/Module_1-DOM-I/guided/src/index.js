// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card
// getElementById: 
const navElement = document.getElementById('mainNav');
// const menuItems = document.getElementsByClassName('menu-item');
// const paragraphs = document.getElementsByTagName('p');

// // A- finding across the entire DOM
// // header { margin-right: 15px; }
// const header = document.querySelector('header');
// const logoTitle = document.querySelector('#logoTitle');
// const firstCard = document.querySelector('.card:nth-of-type(1)');
// // B- finding within one particular element
// const imageFirstCard = firstCard.querySelector('img');
// const titleFirstCard = firstCard.querySelector('h2');
// const subtitleFirstCard = firstCard.querySelector('h3');
// const textFirstCard = firstCard.querySelector('p');
// // C- traversing with dot notation
// const link1FirstCard = textFirstCard.nextElementSibling;
// const link2FirstCard = link1FirstCard.nextElementSibling;


// // 👉 2- Finding collections of elements in the DOM
// // A- Find all the anchor tags inside the nav element
// const links = document.querySelectorAll('nav a');
// // B- Loop over the links and console.log their text content
// links.forEach(link => console.log(link.textContent));
// /**
//  * for (let i = 0; i < links.length; i++) {
//  *  console.log(links[i].textContent)
//  * }
//  */

// // C- Turn the collection of links into a real array
// const realLinks = Array.from(links);
// // D- Use .find to find the anchor tag with the textContent of "Home"
// // Find returns one (the first) element it finds...
// // Filter returns an array
// console.log(realLinks.find(link => link.textContent === 'Home'));

// // == ::: loose equality, value
// // 1 == "1"
// // === ::: stict equality, value + type (string, number, bool)
// // 1 !== "1"


// // 👉 3- Changing an element's text content
// //  A- Change the cat-related content into dog-related content
// logoTitle.textContent = 'Lambda Dog';
// titleFirstCard.textContent = 'Dogs are the best!';
// subtitleFirstCard.textContent = 'Cats are the worst!';
// link2FirstCard.textContent = 'Dog ipsum';


// //  B- Have the students research online the difference between textContent and innerText


// // 👉 4- Changing any property
// //  A- Using dot notation to change a few attributes
// link1FirstCard.setAttribute('href', 'htps://www.pexels.com/search/dog/');
// //  B- Using .setAttribute to change a few attributes
// imageFirstCard.src = 'http://images4.fanpop.com/image/photos/22100000/Thor-pics-thor-2011-22155395-1707-2560.jpg';


// // 👉 5- Changing the styling of an element
// //  A- By changing the class names on the element with the classList API
// header.classList.add('sky');
// header.classList.remove('sky');
// // setInterval(() => header.classList.toggle('sky'), 1000);
// //  B- By manipulating inline styles on the element
// header.style.fontSize = '2em';


// // 👉 6- Creating new elements from scratch and appending them
// // Create a new link inside the nav for "Blog"
// const blogLink = document.createElement('a'); // THIS IS ONLY IN JAVASCRIPT LAND!
// blogLink.textContent = 'Blog';
// blogLink.href = '#';
// document.querySelector('nav').appendChild(blogLink);
// // 👉 7- Making a copy of the card and appending it to the card group
// // DOM nodes can only exist in one spot in the DOM
// // We cannot append the same copy multiple times
// const secondCard = firstCard.cloneNode(true);
// document.querySelector('.card-group').appendChild(secondCard);
// // 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// // 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]

// const data =   {
//     "contact": {
//       "contact-heading" : "Contact",
//       "address" : "123 Way 456 Street Somewhere, USA",
//       "phone" : "1 (888) 888-8888",
//       "email" : "sales@greatidea.io",
//     }
// };
  
// const contactHeading = document.querySelector('.contact-heading');
// const address = document.querySelector('.address');
// const phone = document.querySelector('.phone');
// const email = document.querySelector('.email');

// contactHeading.textContent = data['contact']['contact-heading'];
// address.textContent = data['contact']['address'];
