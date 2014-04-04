document.addEventListener('DOMContentLoaded', function(){
  var figure = document.querySelector('figure'),
      classNumber = 1,
      previousClassNumber;

  figure.addEventListener('click', changeClass);

  function changeClass(){
    figure.classList.remove('c-' + classNumber);
    previousClassNumber = classNumber;

    classNumber = getRandomNumber();

    // make sure class number is not the same as the previous one
    while(previousClassNumber === classNumber) {
      classNumber = getRandomNumber();
    }

    figure.classList.add('c-' + classNumber);
  }

});

function getRandomNumber() {
  var max = 9, min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}