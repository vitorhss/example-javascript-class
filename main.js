const Item = require('./item.js')
const Cabecalho = require('./cabecalho.js');

function run(){
 

    var item = new Item(1, 'Teste');
    var item2 = new Item(2, 'Test2');

    var cabecalho = new Cabecalho('55555', 'João da Silva');

    console.log('Pedido:', cabecalho.getNumeroPedido() );
    console.log('Nome:', cabecalho.getNome() );

    cabecalho.addItem(item);
    cabecalho.addItem(item2);

    console.log('Pedido:', JSON.stringify(cabecalho));

}

run();