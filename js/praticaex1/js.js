function carregar() {
    var msg = document.getElementById ('msg')
     var img = document.getElementById ('imagem')
     var data = new Date()
     //var hora = data.getHours()
     var hora = 19
     msg.innerHTML = `Agora são ${hora} horas`
     if (hora < 12) {
        msg.innerText = 'Bom dia!'
        img.src = 'bomdiam.jpg'
        document.body.style.background = '#F5DA71'
     } else if (hora >= 18) {
        msg.innerText = 'Boa noite!'
        img.src = 'noite.jpg'
        document.body.style.background = '#371F31'
     } else {
        msg.innerText = 'Boa tarde'
        img.src = 'tarde.jpg'
        document.body.style.background = '#F58461'
     }
     
}