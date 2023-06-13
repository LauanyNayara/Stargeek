var Nome = document.getElementById("nome")
var Senha = document.getElementById("senha")
var aviso = document.getElementById("aviso")
var users = JSON.parse(localStorage.getItem("bdcadastro"))
function Login() {
    var nome = Nome.value
    var senha = Senha.value

    if (nome == "", senha == "") {
        aviso.innerHTML = `Senha ou login está incorreto`
        aviso.style.color = 'red'
    }

    var achou = false
    users.forEach((user, pos) => {
        if (nome == user.email && senha == user.senha) {
            achou = true
        }
        else {
            achou = false
        }
    })

    if (achou) {
        location.href = 'conteudo.html'
        
    }else {
        alert('nome de usuário ou senha incorretos')
    }

}