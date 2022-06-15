let sizeCard = document.querySelector('.feedback-card-rating');
let SizeCardWrapper = sizeCard.offsetWidth;
document.getElementById("wrapper").style.height = SizeCardWrapper+"px"; 

let feedbackCardInputRadio = document.querySelector('.radio-rating');
let feedbackCardWidthInputRadio = feedbackCardInputRadio.offsetWidth;

var RadioHeight = document.getElementsByClassName("radio-rating");

for(var i=0;i<RadioHeight.length;i++){
    RadioHeight[i].style.height = feedbackCardWidthInputRadio+"px";
}

// selecting the element
let button = document.querySelector('#submit');

// Add class to the element
button.addEventListener('click', function() {
  var x = document.querySelector('.feedback-card-rating');
  x.classList.add('flip');
  var y = document.querySelector('.feedback-card-state')
  y.classList.add('flip');
});