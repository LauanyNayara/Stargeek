var mostrarFilmes = []

mostrarFilmes = JSON.parse(localStorage.getItem('dadosDoFilme'))

if (mostrarFilmes == null) {
    mostrarFilmes = []
}

function MostrarUsuarios() {

    mostrarFilmes.forEach((item, i) => {


        document.getElementById(item.categoria).innerHTML += `
        <div class="Card1">
            <img 
                onmouseenter="HoverGif('${item.GIF}','IMG${i}')" 
                onmouseleave="HoverGif('${item.imagem}','IMG${i}')" 
                class="Card" 
                id="IMG${i}" 
                src="${item.imagem}"
                <button onclick="excluir(${i})"> <svg onclick="excluir(${i})" xmlns="http://www.w3.org/2000/svg"
                class="ionicon" viewBox="0 0 512 512"><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67
                 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                 stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"
                  d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 
                  176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                  stroke-width="32"/></svg></button>
           
        </div>
        `

    })


}

MostrarUsuarios()

function HoverGif(link, id) {
    var img = document.getElementById(id)
    img.src = link
}

function excluir(id) {
    mostrarFilmes.splice(id, 1)
    localStorage.setItem('dadosDoFilme', JSON.stringify(mostrarFilmes))
    mostrarFilmes = JSON.parse(localStorage.getItem('dadosDoFilme'))
    MostrarUsuarios()
}