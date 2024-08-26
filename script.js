const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A propagação de fake news sobre energias renováveis pode ter impactos significativos. Quais são as principais consequências ambientais e econômicas dessas informações falsas?",

        alternativas: [           
            {
                texto: "A disseminação de fake news pode levar à desconfiança pública e à redução de investimentos em tecnologias sustentáveis",

                afirmacao: "Conhece Fakenews e sabe onde verificar as fontes das notícias."
            },
            {
                texto:  "A disseminação de fake news pode aumentar o investimento em tecnologias não sustentáveis, como combustíveis fósseis.",

                afirmacao: "Desconhece o que é fakenews e precisa estudar mais"
            }
        ]
    },
    {
        enunciado: "As fake news vêm disseminando informações que não condizem com a realidade e isso tem impactado todos os setores da economia. Quando pensamos em energia sustentável é necessário elencar que a preservação das florestas não são apenas dados quantitativos, mas qualitativos, porque tem como impacto os desastres ambientais que têm surgido em nosso contexto mundial. Pensando nisso, como combater as fake news relativo à produção de energia sustentável e qual o impacto disso no cotidiano da prevenção dos desastres ambientais?",
        alternativas: [ 
            {
                texto: "Expôr mais informações sobre o tema de Produção de Energias Sustentáveis a fim de informar a sociedade e blindá-la contra as fake news dos desastres ambientais.",

                afirmacao: "Parabéns! você é um cidadão consciente e deseja estar atento com a realidade do mundo em que está inserido."

            },
            {
                texto: "Não pesquisar sobre a veracidade das informações que vêm pelos portais de comunicação. Confiando cegamente nas notícias.", 

                afirmacao: "Ops! Talvez essa não seja a melhor alternativa"
            }
        ]
    },
    {
        enunciado: "Desastres ambientais são eventos que acontecem no meio natural e que apresentam consequências negativas para os ecossistemas e para os seres humanos. Há um incentivo na produção de energias sustentáveis, mas esse incentivo não ajuda em nada na diminuição dos desastres ambientais. O que você  opina sobre assunto?",

        alternativas: [           
            {
                texto: "Verdade",

                afirmacao: "As diferentes formas de produção de energias sustentáveis é mais uma forma de ganhar dinheiro a partir de recursos naturais"

            },
            {
                texto: "Mentira",
                afirmacao: "Por exemplo, a energia solar contribui para a redução do impacto ambiental, sendo uma fonte limpa e renovável"

            }
        ]
    } 
];

let atual = 0;
let perguntaAtual;
let historiaFinal ="";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()=>respostaSelecionada
        (alternativa));
        {
        
        };
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}
function respostaSelecionada
(opcaoSelecionada){
    const afirmacao =opcaoSelecionada.afirmacao;
    historiaFinal+=afirmacao+" ";
    // historiaFinal=historiaFinal+afirmacao+"";
    atual++;
    mostraPergunta();
}

mostraPergunta();
function mostraResultado(){
    caixaPerguntas.textContent = "IA contra o racismo,mostra o seu perfil";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent=" ";
}
