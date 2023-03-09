const Item = require('./item.js')
const Cabecalho = require('./cabecalho.js');

function run(){
 
    var cabecalho = new Cabecalho('55555', 'João da Silva');
    console.log('Pedido:', cabecalho.getNumeroPedido() );
    console.log('Nome:', cabecalho.getNome() );

    var item = new Item(1, 'Teste');

    console.log('Id:', item.getId());
    console.log('Descrição:', item.getDescricao());

    console.log('Pedido + item: ', cabecalho.getItem());

    cabecalho.setItem(item);

    console.log('Pedido + item: ', cabecalho.getItem());
}

run();