let sizeCard = document.querySelector('.feedback-card-rating');

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

  var checkRadio = document.querySelector('input[name="card-rating"]:checked');

  if(checkRadio != null) {
    document.getElementById("Checked-value").innerHTML = checkRadio.value;

    var x = document.querySelector('.feedback-card-rating');
    x.classList.add('flip');
    
    var y = document.querySelector('.feedback-card-state')
    y.classList.add('flip');
  }

  else {
    alert("Please, make sure to choose a raing.");
  }

});