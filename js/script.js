document.addEventListener('DOMContentLoaded', function(){
  var figure = document.querySelector('figure');
  var classNumber = 1;
  figure.addEventListener('click', function(){
    figure.classList.remove('c-' + classNumber);
    classNumber = getRandomNumber();
    console.log(classNumber);
    figure.classList.add('c-' + classNumber);
  });
});

function getRandomNumber() {
  var max = 9;
  var min = 1;
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}