function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    var sexo = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    /*if (sexo[0].checked) {
        genero = 'homem'
        if (idade > 18) {
            img.setAttribute('src', 'foto/foto-adulto-m.png')
        } else if (idade < 18) {
            img.setAttribute('src', 'foto/foto-bebe-m.png')

        }
    
    }
    res.appendChild(img)*/


    if (fano.value.lenght === 0 || fano.value > ano) {
        alert('[ERRO] Você digitou um valor inválido.')
    } else {
    var sexo = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')


    if (sexo[0].checked) {
        genero = 'é homem e'
        if (idade < 18) {
            //res.innerText = 'Homem menor de idade'
            img.setAttribute('src', 'foto/foto-bebe-m.png')
        }
    }
    res.appendChild(img)
}

}
