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

parseStream.on("finish", () => {
    for(let i=0; i < data.length; i++){
        user = data[i];
        if(user.nome == 'admin'){
            admin_existe = true;
            break;
        }
    }    

    if(admin_existe == true){
        console.log('Usuário admin já existe e foi encontrado')
    }else{
        let user_admin = {
            nome: 'admin';,
            email:'admin@fullture.com.br',
            senha:'452315'
        };
        data.push(user_admin);
        let csv_data = papa.unparse(data);
        fs.writeFileSync('./pessas.csv', csv_data);

        console.log("Usuário admin criado com sucesso");
    }    

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