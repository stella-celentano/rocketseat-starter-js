var verificaMaior18 = function (idade) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            idade >= 18 ? resolve() : reject()
        }, 2000);
    });
}

verificaMaior18(20)
    .then(() => {
        console.log("Maior que 18");
    })
    .catch(() => {
        console.log("Menor que 18");
    });

var inputElement = document.querySelector('#principal input');
var buttonElement = document.querySelector('#principal button');
var listElement = document.querySelector('#principal ul');

const getRepo = function (nome) {
    var nome = inputElement.value;
    if (!nome) {
        mensagemErro();
    }
    loading();
    axios.get(`https://api.github.com/users/${nome}/repos`)
        .then((response) => {
            montarLista(response.data)
        })
        .catch((error) => {
            mensagemErro(error)
        });
}

function montarLista(repositorios) {
    listElement.innerHTML = '';

    for(repo of repositorios) {
        var repoItem = document.createElement('li');
        var repoNome = document.createTextNode(repo.name)

        repoItem.appendChild(repoNome);
        listElement.appendChild(repoItem);
    }
};

function loading() {
    listElement.innerHTML = '';
    var textElement = document.createTextNode('Carregando...');
    var loading = document.createElement('li');

    loading.appendChild(textElement);
    listElement.appendChild(loading);
};

function mensagemErro() {
    listElement.innerHTML = '';
    var nome = inputElement.value;
    var resultadoVerificacao = !nome ? 'Preencha seu nome de usuário' : 'Erro ao processar sua requisição';

    var textElement = document.createTextNode(resultadoVerificacao);
    var erroElement = document.createElement('li');

    erroElement.style.color = 'red'
    erroElement.appendChild(textElement);
    listElement.appendChild(erroElement);
}