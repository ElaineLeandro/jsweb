
function pedido (codigoPedido, quantidade){
    switch (codigoPedido, quantidade){
    
        case 100:
        console.log (`Você pediu cachorro quente `, quantidade*3);
        break;
    
        case 200:
        console.log (`Você pediu Hambúrguer Simples `, quantidade*4);
        break;
    
        case 300:
        console.log (`Você pediu Cheeseburguer `, quantidade*5.50);
        break;

        case 400:
        console.log (`Você pediu Bauru `, quantidade*7.50);
        break;
    
        default:
            console.log('Essa fruta não existe')
    
    
    }}
    
    pedido(400,2);