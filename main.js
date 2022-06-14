let feedbackCard = document.querySelector('.feedback-card-rating');
let feedbackCardWidth = feedbackCard.Width;

document.querySelector(".feedback-card-rating").style.height = feedbackCardWidth+"px";

let feedbackCardInputRadio = document.querySelector('.radio-rating');
let feedbackCardWidthInputRadio = feedbackCardInputRadio.offsetWidth;

document.querySelector(".radio-rating").style.height = feedbackCardWidthInputRadio+"px";

var RadioHeight = document.getElementsByClassName("radio-rating");

for(var i=0;i<RadioHeight.length;i++){
    RadioHeight[i].style.height = feedbackCardWidthInputRadio+"px";
}