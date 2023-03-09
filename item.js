
module.exports= class item {

    constructor(id, descricao){
        this.id = id;
        this.descricao = descricao;

    }

    getDescricao(){
        return this.descricao;
    }

    getId(){
        return this.id;
    }

}