let feedbackCard = document.querySelector('.feedback-card-rating');
let feedbackCardWidth = feedbackCard.offsetWidth;
let Finalwidth = Number(feedbackCardWidth)-100;

document.querySelector(".feedback-card-rating").style.height = Finalwidth+"px";

let feedbackCardInputRadio = document.querySelector('.radio-rating');
let feedbackCardWidthInputRadio = feedbackCardInputRadio.offsetWidth;

var RadioHeight = document.getElementsByClassName("radio-rating");

for(var i=0;i<RadioHeight.length;i++){
    RadioHeight[i].style.height = feedbackCardWidthInputRadio+"px";
}