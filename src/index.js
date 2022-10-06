require('dotenv').config();
const fs = require('fs');
const papa = require('papaparse');
const options = {header:true, dynamicTyping:true};
const dataStream = fs.createReadStream('./pessoas.csv');
const parseStream = papa.parse(papa.NODE_STREAM_INPUT, options);

let data = [];
let admin_existe = false;
const APP_PORT = precess.env.APP_PORT;
console.log(`Executando app na porta ${APP_PORT}`);

// Realizar a leitura do arquivo e passar o resultado para 'parsestream
dataStream.pipe(parseStream);

// cada pedaço de dado lido, alimentar a variável data
parseStream.on('data', chunk => {
    data.push(chunk);
});

parseStream.on('finish', () => {
    let user;
    for(let i=0, 1 < data.length; i++){
        user = data[i];
        if ( user.login == 'admin'){
            admin_existe = true;
            break;
        }
    }
    if (admin_existe){
        console.log('Usuário admin encontrado com sucesso!');
    }else{
        //Admin inexistente
        let user_admin = {
            login:'admin',
            nome:'Administrador',
            sobrenome:null,
            senha:'fullture@4545'
        }
        data.push(user_admin);
        let csv_data = papa.unparse(data);
        fs.writeFileSync('./pessoas.csv', csv_data);
        console.log('Criação do Usuário admin foi realizada com sucesso!');
    }
});
