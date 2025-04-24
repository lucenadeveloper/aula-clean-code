function calcularPrecoComDesconto(valor, desconto) {
    return valor - (valor * desconto);
  }
  
  console.log("Caixa 1: R$" + calcularPrecoComDesconto(100, 0.1));
  console.log("Caixa 2: R$" + calcularPrecoComDesconto(200, 0.1));
  console.log("Caixa 3: R$" + calcularPrecoComDesconto(150, 0.1));