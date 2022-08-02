function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    
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
        else if (idade >= 65) {
            //res.innerText = ' Homem idoso'
            img.setAttribute('src', 'foto/foto-idoso-m.png')
        }
        else {
            //res.innerText = 'Homem adulto'
            img.setAttribute('src', 'foto/foto-jovem-m.png')
        }
    } else if (sexo[1].checked) {
        genero = 'é mulher e'
        if (idade < 18) {
            //res.innerText = 'Mulher menor de idade'
            img.setAttribute('src', 'foto/foto-bebe-f.png')
        } else if (idade >= 65) {
            //res.innerText = 'Mulher idosa'
            img.setAttribute('src', 'foto/foto-idoso-f.png')
        } else {
            //res.innerText = 'Mulher adulta'
            img.setAttribute('src', 'foto/foto-jovem-f.png')
        }
    }
    res.innerText = `Você ${genero} tem ${idade} anos`
    res.appendChild(img)
}

}