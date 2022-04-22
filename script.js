function mostrarHora(){
    let hr = document.getElementById('hr')
    let img = document.getElementById('foto')
    let data = new Date()
    let hora = data.getHours ()
    let minutos = data.getMinutes()
    
    hr.innerHTML = `São exatamente: ${hora} Horas e ${minutos} minutos.`
   
    if (hora >=5 && hora <=12){
        img.src = "./imagens/manha.png"
        document.body.style.background ='#90ABE4'

    } else if (hora >12 && hora <=18){
        img.src = "./Imagens/tarde.png"
        document.body.style.background="#EABE63"
    } else {
        img.src = './Imagens/noite.png'
        document.body.style.background='#133031'
    }
}