let number1 = document.getElementById('number_one')
let counter1 = 0
setInterval(() => {
    if (counter1 == 65) {
        clearInterval()
    } else {
        counter1 += 1
        number.innerHTML = counter1 + '%'
    }
}, 30)


let number2 = document.getElementById('number_two')
let counter2 = 0
setInterval(() => {
    if (counter2 == 5) {
        clearInterval()
    } else {
        counter2 += 1
        number.innerHTML = counter2 + '%'
    }
}, 30)


let number3 = document.getElementById('number_three')
let counter3 = 0
setInterval(() => {
    if (counter3 == 60) {
        clearInterval()
    } else {
        counter3 += 1
        number.innerHTML = counter3 + '%'
    }
}, 30)


let number4 = document.getElementById('number_four')
let counter4 = 0
setInterval(() => {
    if (counter4 == 61) {
        clearInterval()
    } else {
        counter4 += 1
        number.innerHTML = counter4 + '%'
    }
}, 30)