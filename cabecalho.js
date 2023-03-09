const Item = require('./item.js')

module.exports = class cabecalho {

    constructor(numeroPedido, nome){
        this.numeroPedido = numeroPedido;
        this.nome = nome;
        this.item = new Item();
    }

    setItem(item){
        this.item = item;
    }

    getNumeroPedido(){
        return this.numeroPedido;
    }

    
    getNome(){
        return this.nome;
    }

    getItem(){
        return this.item;
    }
    
}