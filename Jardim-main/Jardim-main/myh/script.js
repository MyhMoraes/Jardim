const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Há muito tempo, existia um santuário sagrado onde almas corrompidas encontravam paz. Porém, fanáticos religiosos destruíram o local, transformando as almas em seres malignos cheios de vingança. Anos depois, cinco amigos partem em busca de uma amiga desaparecida. Alguns acreditam que ela fugiu, foi raptada ou até mesmo morta. A investigação os leva ao misterioso Jardim das Almas Perdidas, onde precisarão enfrentar os segredos sombrios do lugar e descobrir o destino da amiga",
        alternativas: [
            {
                texto: "Recusar",
                afirmacao: "Todos vão embora. "
            },
            {
                texto: "Prosseguir",
                afirmacao: "A história continua."
            },
             
        ]
    },
    {
        enunciado: "O grupo percebeu que era perigoso e desistiu. End Game!",
        alternativas: [
            {
                texto: "Voltar ao Jogo",
                afirmacao: "O jogo reinicia"
            },
            
        ]
    },
    {
        enunciado: "O grupo decidiu ir, inocentes não sabiam onde ficava o santuário. O grupo decidiu procurar por sua amiga pela floresta. em uma ntrilha, eles encontraram uma bifurcação... ",
        alternativas: [
            {
                texto: "Ir para a esquerda.",
                afirmacao: "."
            },
            {
                texto: "Ir para a direita.",
                afirmacao: "Eles encontram o santuario perdido."
            }
        ]
    },
    {
        enunciado: "Eles impressionados com sua capacidade de encontrar o dito santuário, ao chegar lá..",
        alternativas: [
            {
                texto: "os amigos exploram por fora do santuário por fora.",
                afirmacao: "Ficam fora do santuário."
            },
            {
                texto: "Os amigos entram no santuário",
                afirmacao: "Eles tentam encontrar a sua amiga."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();