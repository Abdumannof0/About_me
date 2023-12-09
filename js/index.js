const form = document.querySelector('#form')

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let text = document.getElementById('text1').value
    let email = document.getElementById('text2').value
    let message = document.getElementById('text3').value

    let my_text = `Resalt is:%0A - Text1: ${text} %0A - Text2: ${email} %0A - Text3: ${message}`

    let token = "6878364378:AAHc6KogYCEwwpEoyQrfvFhVERHIe5D0uW8"

    let chat_id = -4019133542

    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()

    console.log("Message");
})