module.exports = class Mensagem{
    constructor(p_remetente, p_destinatario, p_mensagem){
        this._remetente = p_remetente;
        this._destinatario = p_destinatario;
        this._mensagem = p_mensagem;
    }
    setRemetente(p_remetente){
        this._remetente = p_remetente;     
    }
    getRemetente(){
        return this._remetente;     
    }
    setDestinatario(p_destinatario){
        this._destinatario = p_destinatario;     
    }
    getDestinatario(){
        return this._destinatario;     
    }
    setMensagem(p_mensagem){
        this._mensagem = p_mensagem;     
    }
    getMensagem(){
        return this._senha;     
    }
}