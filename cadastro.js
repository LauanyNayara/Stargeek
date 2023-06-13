var cadastro = []
cadastro = JSON.parse(localStorage.getItem('bdcadastro'))
if (cadastro == null) {
    cadastro = []
}
console.log(cadastro);

localStorage.setItem('bdcadastro', JSON.stringify(cadastro))
function login() {

    var inp = document.getElementById('nome').value
    var inp2 = document.getElementById('sobrenome').value
    var inp3 = document.getElementById('CPF').value
    var inp4 = document.getElementById('email').value
    var inp5 = document.getElementById('senha').value
    var inp6 = document.getElementById('senha2').value

    var cadastrar = {
        Nome: inp,
        sobrenome: inp2,
        cpf: inp3,
        email: inp4,
        senha: inp5,
        senha2: inp6
    }

    if (inp == '', inp2 == '', inp3 == '', inp4 == '', inp5 == '', inp6 == '') {
        return
    }


    if (inp5 != inp6) {
        alert('Senhas não coencidem')
        return
    }

    cadastro.push(cadastrar)
    localStorage.setItem('bdcadastro', JSON.stringify(cadastro))


    alert('Cadastro efetuado')
    window.location.href = 'login.html'

}



