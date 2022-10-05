module.exports = class Pessoa{
    constructor(p_nome, p_email, p_senha){
        /*Estamos alimentando os atributos da classe com os valores que foram 
        passados para o construtor ao instanciá-la. Prefixamos um dígito de “_”
        (sublinhado, ou “underline”) porque em nosso desenho estes itens são 
        de visibilidade privada (sinal de “-” antes de seus nomes), e esta é a forma
        que o Javascript oferece o conceito de visibilidade em Programação Orientada 
        a Objetos (POO): ele utiliza o que chamamos de “Implementação por convenção”, 
        ou seja, a linguagem não oferece um meio nativo, como o Java ou C-Sharp, 
        para demarcar um item como privado e a comunidade combina uma forma
        de fazer isso via convenção de nomes. Então na prática com Javascript, você 
        deveria utilizar os métodos públicos para manipular itens em uma classe que 
        sejam prefixados com um dígito “_”. No nosso caso aqui, um(a) outro(a) 
        desenvolvedor(a) vai perceber que mais abaixo nesta classe temos um conjunto 
        de operações (públicas, pois não possuem o prefixo “_”) que podem ser utilizadas
        para manipular estes atributos, então devemos preferi-los e não os manipular 
        diretamente. E há uma operação que não deve ser utilizada fora do escopo desta 
        classe, então privada, nomeada “validaSenha()”, pois possui o dígito "_".*/
        
        this._nome = p_nome;
        this._email = p_email;
        this._senha = p_senha;
    }
    setNome(p_nome){
        this._nome = p_nome;     
    }
    getNome(){
        return this._nome;     
    }
    setEmail(p_email){
        this._nome = p_email;     
    }
    getEmail(){
        return this._email;     
    }
    setSenha(p_senha){
        this._senha = p_senha;     
    }
    getSenha(){
        return this._senha;     
    }
}