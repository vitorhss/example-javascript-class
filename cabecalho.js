const Item = require('./item.js')

module.exports = class cabecalho {

    itens = [];
    constructor(numeroPedido, nome){
        this.numeroPedido = numeroPedido;
        this.nome = nome;
        }

    getNumeroPedido(){
        return this.numeroPedido;
    }

    getNome(){
        return this.nome;
    }

    getItens(){
        return this.itens;
    }

    addItem(item){
        this.itens.push(item);
    }
    
}