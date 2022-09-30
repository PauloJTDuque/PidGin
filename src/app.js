const PessoaModelo = require('./Pessoa');
const MensagemModelo = require('./Mensagem');

let gerente = new PessoaModelo("Paulo Duque", "paulo.duque@terra.com.br", "123456");
let analista = new PessoaModelo("Primo RIco", "thiagonigro@primorico.com.br", "primorico");
console.log(gerente, analista);

let mensagem = new MensagemModelo(gerente,analista,"Enviar Retorno da Analise Financeira");

console.log(mensagem)

let texto = `Mensagem enviada por 
    ${mensagem.getRemetente().getNome()}
    para ${mensagem.getDestinatario().getNome()}`
console.log(texto)