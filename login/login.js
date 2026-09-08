// var nome = "Késsia"
// const nome = "Késsia"

// let nome = "Késsia";

// console.log(nome);

// nome = "Gustavo"
// console.log(nome);


// const nome = "Késsia"
// console.log(nome);

// nome = "Gustavo"
// console.log(nome);

const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");

btnSenha.addEventListener("click", function() {


    // if( campoSenha.type == "password") {
    //     campoSenha.type = "text"
    // }
    // else {
    //     campoSenha.type = "password"
    // }

    campoSenha.type = campoSenha.type == "password" ? "texto" : "password"

})

