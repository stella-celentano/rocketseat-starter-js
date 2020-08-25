    // AULA 1 - REQUISIÇÕES AJAX
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/stella-celentano');
// xhr.send(null);

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

    // AULA 2 - PROMISES
// as promises são códigos que não vão influenciar na linha do tempo do nosso código
// que vão devolver um valor de resultado só depois de um tempo e não precisamos nos
// preocupar em qual momento que esse valor será retornado pq o js vai continuar executando normalmente

// var minhaPromise = function () {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/stella-celentano');
//         xhr.send(null);

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// }

// minhaPromise()
//     .then(function (response) {
//         console.log(response)
//     }) // vai ser executado quando chegar no resolve da promise
//     .catch(function (error) {
//         console.warn(error)
//     }); // vai ser executado se cair no reject da promise

    // AULA 3 - UTILIZANDO AXIOS
    // o axios é um encapsulamento do XMLHttpRequest, ele vai nos ajudar a retornar os 
    // valores de forma mais fácil, por ex, não precisamos mais usar o JSON.parse, ele 
    // ja vai entender que a resposta é um JSON e nos retorna um objeto js
axios.get('https://api.github.com/users/stella-celentano')
    .then(function (response) {
        console.log(response)
    }) 
    .catch(function (error) {
         console.warn(error)
    }); 