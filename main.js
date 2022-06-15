let feedbackCardInputRadio = document.querySelector('.radio-rating');
let feedbackCardWidthInputRadio = feedbackCardInputRadio.offsetWidth;

var RadioHeight = document.getElementsByClassName("radio-rating");

for(var i=0;i<RadioHeight.length;i++){
    RadioHeight[i].style.height = feedbackCardWidthInputRadio+"px";
}