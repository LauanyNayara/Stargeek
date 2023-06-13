var dadosFilmes = []
dadosFilmes = JSON.parse(localStorage.getItem('dadosDoFilme'))
if (dadosFilmes == null) {
    dadosFilmes = []
}
console.log(dadosFilmes);

function cadastrar() {
    var inp = document.getElementById('input1').value
    var inp2 = document.getElementById('input2').value
    var inp3 = document.getElementById('input3').value
    var inp4 = document.getElementById('input4').value
    var inp5 = document.getElementById('input5').value
    var categorias = document.querySelectorAll('#categoria')

    var Categoria_tipo 

    categorias.forEach(categoria =>{
        if(categoria.checked){
            Categoria_tipo = categoria.value
        }
    })

    var filmes = {
        titulo: inp,
        imagem: inp2,
        GIF: inp3,
        resumo: inp4,
        critica: inp5,
        categoria: Categoria_tipo
    }

    dadosFilmes.push(filmes)
    localStorage.setItem('dadosDoFilme', JSON.stringify(dadosFilmes))

    if (inp == '', inp2 == '', inp3 == '', inp4 == '', inp5 == '') {
        return
    }

    alert('Cadastro efetuado')
    window.location.href = 'conteudo.html'

}

function carregarImg() {
    document.getElementById("img").src = document.getElementById('imagem').value
}
function carregarGif() {
    document.getElementById("imggif").src = document.getElementById('gif').value
}








    //document.getElementById("mostrar_Capa").innerHTML = `<img src="${inp2}">`
    //document.getElementById("mostrar_GIF").innerHTML = `<img src="${inp3}">`

/*for (let i = 0; i < dadosFilmes.length; i++) {
    document.getElementById("resultado").innerHTML += `<div><p>${filmes[i]}</p>
    <img src="${imagens[i]}" alt="" height = '100px' ;width = '100px';></p></div>`
}
alert("FIlme Cadastrado com sucesso")
}
function sugerir() {
var i = parseInt(Math.random()*filmes.length)

document.getElementById("resultado-sugerido").innerHTML += `<div><h1>Sugerido</h1><p>${filmes[i]}</p>
    <img src="${imagens[i]}" alt="" height = '100px' ;width = '100px';></p></div>`

}*/

