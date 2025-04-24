// 🧠 EXERCÍCIO: Comentários úteis vs. desnecessários
//
// O código abaixo realiza um cálculo simples relacionado a um pedido de medicamentos,
// mas está repleto de comentários que apenas repetem o que o código já diz.
//
// Sua missão é:
// - Refatorar o código para que ele seja **autodocumentado** (sem necessidade de comentários explicativos redundantes)
// - Tornar nomes mais descritivos
// - Manter o funcionamento original
//
// ❌ Código original:

// Função para fazer coisas
function f(x, y) {
    // pega o valor do produto
    let a = x.preco;

    // pega a quantidade pedida
    let b = y.qtd;

    // calcula o valor total
    let c = a * b;

    // imprime o valor total
    console.log("Total: " + c);
}



// ✅ Solução com boas práticas

function calcularValorTotalDoPedido(produto, pedido) {
    const precoUnitario = produto.preco;
    const quantidadeSolicitada = pedido.qtd;
    const valorTotal = precoUnitario * quantidadeSolicitada;

    console.log("Total: " + valorTotal);
}
