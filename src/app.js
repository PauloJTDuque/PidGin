require('dotenv').config();

const PessoaModelo = require('./Pessoa');
const MensagemModelo = require('./Mensagem');

const fs = require("fs");
const papa = require ("papaparse");
const options = {header:true, dynamicTyping:true};
const dataStream = fs.createReadStream("./pessoas.csv");
const parseStream = papa.parse(papa.NODE_STREAM_INPUT,options);

let data = [];

let admin_existe = false;

const PORT = process.env.APP_PORT;

console.log(`Executando na porta ${PORT}`);

dataStream.pipe(parseStream);

parseStream.on("data", chuck => {
    data.push(chuck)
});




// let gerente = new PessoaModelo("Paulo Duque", "paulo.duque@terra.com.br", "123456");
// let analista = new PessoaModelo("Primo Rico", "thiagonigro@primorico.com.br", "primorico");
// console.log(gerente, analista);

// let mensagem = new MensagemModelo(gerente,analista,"Enviar Retorno da Analise Financeira");


// let texto = `Mensagem enviada por 
// ${mensagem.getRemetente().getNome()}
// para ${mensagem.getDestinatario().getNome()}`
// console.log(texto)
// console.log(mensagem)