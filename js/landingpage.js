/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 * call backToTop method when the document is loaded, go to top goes to the start of the document when the tag / button "Back To Top" is clicked
*/
document.addEventListener("DOMContentLoaded", () => {
backToTop();
});


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
const section = document.querySelectorAll('section');
const ul = document.querySelector("#navbar__list");

for (let i = 0; i < section.length; i++) {
    const navItem = section[i];
    const listItem = document.createElement("li");
  const anchorTag = document.createElement("a");
  anchorTag.setAttribute("href", "#" + [navItem.id]);

  listItem.className = "menu__link";
  anchorTag.textContent = [navItem.dataset.nav];
  anchorTag.append(listItem.textContent);
  listItem.append(anchorTag);
  ul.append(listItem);
}

/*********************/
//Highlight active section
//we need the js engine to alert the browser whenever the document is being scrolled and moves from one section to the other

//invoke the onscroll event
onscroll = function(){
  //create a variable 'scrollPosition' which gives the scroll position of the document in px (i.e. the number of pixels by which the contents of the document are scrolled upward)
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
}

//create a variable 'scrollPosition' which gives the scroll position of the document in px (i.e. the number of pixels by which the contents of the document are scrolled upward)
onscroll = function(){
const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//use a forEach loop to iterate over each section
section.forEach(section => {
  //if the number of pixels of scrollPosition is greater than or equal to the number of pixels of the top position of a section, i.e. 'section.offsetTop' and if scrollPosition is less than the number of pixels of the bottom position of a section, calculated by adding the number of pixels from the top position plus the number of pixels representing the height of the section
  if (scrollPosition >= section.offsetTop - section.offsetHeight * 0.5 && scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.5){
  //console.log(section.attributes.id);
  //this will show in the console the id of the section that we are viewing and we add the 'your-active-class' to each such id
  const currentID = section.attributes.id.value;
  removeAllActiveClasses();
  addActiveClass(currentID)
  }
})
};

const removeAllActiveClasses = function(){
  document.querySelectorAll('nav a').forEach((el) => {
    el.classList.remove('your-active-class');
  })
}

const addActiveClass = function(currentID){
  //console.log(currentID);
  const selector = `nav a[href="#${currentID}"]`;
  document.querySelector(selector).classList.add('your-active-class');


}



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active







const btn = document.querySelector("button");

//function that goes to the top of the document when the user presses the button

function backToTop(){
	btn.addEventListener("click", () => {
		document.documentElement.scrollTop=0;
		document.body.scrollTop=0;
	});
}

document.addEventListener("DOMContentLoaded", () => {
backToTop();
});
