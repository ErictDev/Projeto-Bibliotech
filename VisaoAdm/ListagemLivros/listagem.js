const livros = document.querySelectorAll(".livro")

const botaoAnterior = document.getElementById("pagina-anterior")
const botaoProxima = document.getElementById("proxima-pagina")
const numeroPagina = document.querySelector(".pagina-atual")
const quantidadeLivros = document.querySelector(".quantidade-livros")

// Configuracao da pagina

// Define quantos livros seramo mostrados em cada pagina
const livrosPorPagina = 4;

// Guarda qual pagina esta sendo exibida, começando na pagina 1
let paginaAtual = 1;


//* Calculando o total de paginas

// Divide a quantidade total de livros pela quantidade de livros por pagina
// Math.ceil -> arredonda o resultado para cima

// Exemplo:
// 10 livros / 4 por pagina = 2.5
//Math.ceil() = 2.5 arredondado para cima -> 3 paginas
const totalPaginas = Math.ceil(livros.length / livrosPorPagina)

//Funcao responsavel por mostrar a pagina (atualizar os elementos)

function mostrarPagina() {

    // Descobre o indice do primeiro livro que deve aparecerr

    const inicio = (paginaAtual - 1) * livrosPorPagina;

    //Descobre ate onde os livros devem ser exibidos
    const fim = inicio + livrosPorPagina

    //Percorre toda a lista de livros encontradas no html
    //"livro" representa o elemento natural
    //"posicao" representa a posicao desse livro na lista

    livros.forEach((livro, posicao) => {

        //inicio na pagina 1 = 0
        //fim = 4

        //Verifica se o indice ou a posicao do livro esta dentro do intervalo da pagina atual
        if (posicao >= inicio && posicao < fim) {
            //mostra o elemento na tela
            //se tiver dentro do intervalo , mostra o livro
            livro.style.display = "grid"
        }
        else {
            // se nao estiver esconde o livro
            livro.style.display = "none"
        }
    })

    //Atualiza no HTML o numero da pagina atual
    numeroPagina.textContent = paginaAtual

    //Inicialmente consideramos o "fim" como a posicao do ultimo livro mostrado
    let ultimoLivro = fim

    //Se o valor ultrapassar a quantidade real de livros, usamos a quantidade total
    if (ultimoLivro > livros.length) {
        ultimoLivro = livros.length
    }

    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros.`
}

// Evento de click de proxima pagina

botaoProxima.addEventListener("click", () => {

    //So permite avanças se ainda existir uma proxima pagina
    if (paginaAtual < totalPaginas) {

        //Avanca uma pagina
        //paginaAtual = paginaAtual + 1

        paginaAtual++

        mostrarPagina();
    }
})

// Evento de click no botao da pagina anterior

botaoAnterior.addEventListener("click", () => {

    //So permite voltar se nao estivermos na primeira pagina

    if (paginaAtual > 1) {

        //voltamos uma pagina

        paginaAtual--;

        //atualiza os livros exibidos na tela

        mostrarPagina();
    }

})

//Quando a pagina carregar, precisamos executar a funcao de mostrar pagina uma vez para esconder os livro que nao pertencem a primeira pagina

mostrarPagina();