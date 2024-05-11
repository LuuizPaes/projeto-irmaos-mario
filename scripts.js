const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.tranform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}



function cliqueiNaMascara() {
    form.style.left = "-300px"
    form.style.tranform = "translateX(0)"
    mascara.style.visibility = "hidden"

}

function faleConosco() {
    form.style.left = "50%"
    form.style.tranform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

const button = document.querySelector('.audio-button')
button.addEventListener('click', function () {
    const audioMario = document.querySelector('#audio-mario')
    audioMario.currentTime = 0
    audioMario.play()
})