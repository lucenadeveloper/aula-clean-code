// Sujo
function calcularTotal(pedido) {
    return pedido.itens.reduce((acc, item) => {
        return acc + item.quantidade * item.preco;
    }, 0);
}

// Limpo
function calcularSubtotal(item) {
    return item.quantidade * item.preco;
}

function calcularTotal(pedido) {
    return pedido.itens.reduce((total, item) => total + calcularSubtotal(item), 0);
}
