var imagemvisualizacao = document.getElementById('imagem-visualizacao');

const verdecipreste = {
    nome:'verde-cipreste',
    pasta:'imagens-verde-cipreste'
};

const azulinverno = {
nome: 'azul-inverno',
pasta:'imagens-azul-inverno'
};

const meianoite = {
    nome:'meia-noite',
    pasta:'imagens-meia-noite'
};

const estelar = {
    nome:'estelar',
    pata:'imagens-estelar'
};

const rosaclaro = {
    nome:'rosa-claro',
    pasta:'imagens-rosa-claro'
};

const opcoescores = [verdecipreste, azulinverno, meianoite, estelar, rosaclaro]




let imagemselecionada = 1;

function trocarimagem() {

    const idopcaoselecionada = document.querySelector('[name = "opcao-imagem"]:checked').id;
    imagemselecionada = idopcaoselecionada.charAt(0);
    imagemselecionada.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemselecionada +'.jpeg';
}