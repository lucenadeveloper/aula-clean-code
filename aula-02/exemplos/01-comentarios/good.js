// 🧠 EXEMPLO: Comentário útil
//
// Esse é um exemplo de BOM uso de comentário.
// Ele explica uma **decisão de negócio** que não é óbvia só olhando para o código.
// Esse tipo de contexto não pode ser expresso apenas com bons nomes.
//
// ✅ Exemplo bom:

function aplicarDescontoEmMedicamentoControlado(valorTotal) {
    // Desconto de 10% obrigatório por política da ANVISA para medicamentos controlados (exemplo)
    const desconto = valorTotal * 0.1;
    return valorTotal - desconto;
}


// ✅ Exemplo bom:
// Deixar tudo bem claro, para não precisar de comentário
let precoUnitario = produto.preco;
let quantidadeSolicitada = pedido.qtd;
let valorTotal = precoUnitario * quantidadeSolicitada;

console.log("Total:", valorTotal);
