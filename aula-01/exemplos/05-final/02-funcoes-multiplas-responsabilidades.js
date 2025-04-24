// Sujo
function processarPedido(pedido) {
    pedido.status = "processado";
    enviarEmail(pedido.clienteEmail);
    salvarNoBanco(pedido);
  }
  


// Limpo
function atualizarStatusPedido(pedido) {
    pedido.status = "processado";
  }
  
  function notificarCliente(email) {
    enviarEmail(email);
  }
  
  function salvarPedido(pedido) {
    salvarNoBanco(pedido);
  }
  
  function processarPedido(pedido) {
    atualizarStatusPedido(pedido);
    notificarCliente(pedido.clienteEmail);
    salvarPedido(pedido);
  }
  
