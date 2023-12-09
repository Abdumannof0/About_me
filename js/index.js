const form = document.querySelector('#form')

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let text1 = document.getElementById('text1').value
    let text2 = document.getElementById('text2').value
    let text3 = document.getElementById('text3').value

    let my_text = `Resalt is:%0A - Text1: ${text1} %0A - Text2: ${text2} %0A - Text3: ${text3}`

    let token = "6878364378:AAHc6KogYCEwwpEoyQrfvFhVERHIe5D0uW8"

    let chat_id = -4019133542

    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()

    console.log("Message");
})