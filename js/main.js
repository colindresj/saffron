document.addEventListener('DOMContentLoaded', function(){
  var figure = document.querySelector('.saffron'),
      maxClassNumber = 15,
      classNumber = 1,
      previousClassNumber,
      changeClass;

  figure.addEventListener('click', changeClass);

  changeClass = function(){
    figure.classList.remove('c-' + classNumber);
    previousClassNumber = classNumber;

    if (classNumber < maxClassNumber) {
      classNumber++;
    } else {
      classNumber = 1;
    }

    figure.classList.add('c-' + classNumber);
  };
});
