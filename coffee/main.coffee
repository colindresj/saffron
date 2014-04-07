document.addEventListener "DOMContentLoaded", ->
    figure = document.querySelector ".saffron"
    maxClassNumber = 15
    classNumber = 1

    figure.addEventListener "click", changeClass

    changeClass = ->
        figure.classList.remove "c-#{classNumber}"

        if classNumber < maxClassNumber
            classNumber++
        else
            classNumber = 1

        figure.classList.add "c-#{classNumber}"
