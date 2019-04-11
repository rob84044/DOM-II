// Your code goes here

// Mouseover actions for the header and nav components
//Upon entering the header of the site, site the header to orange with a default text color of white and when hovered over the title and the nav items will change to orange.
//Set the variables
let header = document.querySelector(".main-navigation");
let logoHeading = document.querySelector(".logo-heading");
let navLink1 = document.getElementsByTagName("a")[0];
let navLink2 = document.getElementsByTagName("a")[1];
let navLink3 = document.getElementsByTagName("a")[2];
let navLink4 = document.getElementsByTagName("a")[3];

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
  });


// When the main picture is clicked have an alert pop up that is populated with the images alt text

  let busImage = document.querySelector('.intro img');
  let busImageAlt = busImage.alt;

  busImage.addEventListener('click', function(event) {
  window.alert(`${busImageAlt}`)
  event.stopPropagation()
});


// When you use the scroll wheel within the first div, its background turns orange
  let divSelector = document.querySelector('.content-section .text-content p');

  divSelector.addEventListener('click', function(event) {
  event.target.style.backgroundColor = 'orange'; 
  event.stopPropagation()
})


// When you use the scroll wheel within the first div, its background turns orange
let pTag = document.querySelectorAll('p')[0];

pTag.addEventListener('mouseover', function(event) {
  window.alert('Wasup') 
event.stopPropagation()
})

//Focus and Blur effects for each form field
let allInputFields = document.querySelectorAll('input[type="text"]')
inputFieldArray = Array.from(allInputFields);


  inputFieldArray.forEach(function(inputField) {
    inputField.addEventListener('focus', function(){
      event.target.style.background = 'orange'; 
    })
  })

  inputFieldArray.forEach(function(inputField) {
    inputField.addEventListener('blur', function(){
      event.target.style.background = 'lightgreen'; 
    })
  });


  // secBorder = document.querySelectorAll('.destination');

  // secBorder.forEach(function(border){
  //   inputField.addEventListener('load', function(){
  //     border.target.style.border = '1px solid orange';
  // })

  window.addEventListener('load', function(event) {
    alert('Every time you refresh me a baby seal dies');
    event.stopPropagation();
});




// //Event listeners 
// element.addEventListener('keydown', CallBack);
// element.addEventListener('wheel', CallBack);
// element.addEventListener('drag / drop', CallBack);
// element.addEventListener('load', CallBack);
