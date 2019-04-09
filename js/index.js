// Your code goes here

// Mouseover actions for the header and nav components

//Set the variables
let header = document.querySelector(".main-navigation");
let logoHeading = document.querySelector(".logo-heading");
let navLink1 = document.getElementsByTagName("a")[0];
let navLink2 = document.getElementsByTagName("a")[1];
let navLink3 = document.getElementsByTagName("a")[2];
let navLink4 = document.getElementsByTagName("a")[3];


//Upon entering the header of the site, site the header to orange with a default text color of white and when hovered over the title and the nav items will change to orange.

header.addEventListener('mouseover', function(event) {   
  // Highlight the header orange
  event.target.style.backgroundColor = "orange";
  // Color the H1 White
  logoHeading.style.color = 'black';
  //Color the nav items white
  navLink1.style.color = 'black';
  navLink2.style.color = 'black';
  navLink3.style.color = 'black';
  navLink4.style.color = 'black';
  })


// When the main picture is clicked have an alert pop up that is populated with the images alt text

  let busImage = document.querySelector('.intro img');
  let busImageAlt = busImage.alt;

  busImage.addEventListener('click', function(event) {
  window.alert(`${busImageAlt}`)
  event.stopPropagation()
})


// When you use the scroll wheel within a div, its background turns orange
let divSelector = document.querySelectorAll('div');
divSelector.addEventListener('wheel', (event) => {event.target.style.backgroundColor = 'orange'})



// //Event listeners 
// element.addEventListener('keydown', CallBack);
// element.addEventListener('wheel', CallBack);
// element.addEventListener('drag / drop', CallBack);
// element.addEventListener('load', CallBack);
// element.addEventListener('focus', CallBack);
// element.addEventListener('resize', CallBack);
// element.addEventListener('scroll', CallBack);
// element.addEventListener('select', CallBack);

// // Callback functions
// function greenColor(){
//   p.style.color = 'green';
// }

// function fullScreen (event){
//   if(event.type == 'fullscreenchange'){
//     body.style.color = 'blue';
//   }
// 