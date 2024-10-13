/* 
    OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.
        PASSO 1 - precisamos criar uma variável no JS para trabalhar com a listagem de pokedevs.
        PASSO 2 - identificar o evento de clique no elemento da listagem.
        PASSO 3 - remover a classe aberto só do cartão que tá aberto.
        PASSO 4 - ao clicar em um pokedev da listagem pegamos o ID desse pokedev para saber qual cartão abrir.
        PASSO 5 - remover a classe ativo que marca o pokedev selecionado. Pra não ficar laranjinha.
        PASSO 6 - adicionar a classe ativo no pokedev selecionado na listagem. Pra ficar laranjinha.
*/


//PASSO 1 - precisamos criar uma variável no JS para trabalhar com a listagem de pokedevs.


//Selector = class, querySelectorAll busca vários, querySelector busca um em específico. Sempre que for usar o querySelector(all) não se esqueça de especificar se é um ID ou uma class.

//Note que a constante declarada abaixo são TODOS os elementos que possuem "pokedev".
const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');


//PASSO 2 - identificar o evento de clique no elemento da listagem.

//O nome antes da arrow tanto faz, mas note que o nome da função posterior deve receber o mesmo nome da arrow para ter efeito sob o que está sendo referenciado.

//Percorre a listagem adicionando efeito de clique em cada pokedev. Lista a classe "aberto" e então remove a mesma do pokedev atual, em seguida põe a classe no pokedev selecionado, por fim, desativa o pokedev atual e ativa o selecionado.
listaSelecaoPokedevs.forEach(pokedev => {
    //O addEventListener é um método JavaScript usado para registrar uma função que será chamada sempre que um determinado evento ocorrer em um elemento. Ele permite que você configure eventos como cliques, pressionamento de teclas, movimentação do mouse, e outros, para interagir com elementos do DOM.
    pokedev.addEventListener('click', () => {
        //PASSO 3 - remover a classe aberto só do cartão que tá aberto.
        esconderCartaoPokedev();

        //PASSO 4 - ao clicar em um pokedev da listagem pegamos o ID desse pokedev para saber qual cartão abrir.

        // Aqui a função é atribuída pois usamos a constanto criada novamente depois.
        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);

        //PASSO 5 - remover a classe ativo que marca o pokedev selecionado. Pra não ficar laranjinha.
        desativarPokedevNaListagem();

        //PASSO 6 - adicionar a classe ativo no pokedev selecionado na listagem. Pra ficar laranjinha.
        ativarPokedevNaListagem(idPokedevSelecionado);
    })
})

//Todas as funções foram criadas após terminar de construir o código.

//Para criar funções rapidamente: clique direito do mouse > refatorar > extrair para function no escopo global.

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector('.aberto');
     //Remove a classe aberto da lista de classes do cartaoPokedevAberto.
    cartaoPokedevAberto.classList.remove('aberto');
}

function mostrarCartaoPokedev(pokedev) {
    /* Pega o ID do Pokedev selecionado no clique do mouse via
    "pokedev.attributes.id.value" */
    const idPokedevSelecionado = pokedev.attributes.id.value;

    //Concatena a string "cartao" com o ID do pokedev selecionado via clique do mouse. Fazemos isso para o pokedev da listagem virar um pokedev do cartao.
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;

    //Pega o ID do cartão pokedev.
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);

    //Adiciona a classe aberto na lista de classes do cartaoPokedevParaAbrir. 
    
    //Note que a lista de classes do cartaoPokedevParaAbrir é a lista de classes do "novo" ID gerado por idDoCartaoPokedevParaAbrir e atribuido por cartaoPokedevParaAbrir.
    cartaoPokedevParaAbrir.classList.add('aberto');

    //Necessário return por causa da constante. Note que aqui a função recebe um parâmetro.
    return idPokedevSelecionado;
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector('.ativo');
    pokedevAtivoNaListagem.classList.remove('ativo');
}

function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add('ativo');
}

