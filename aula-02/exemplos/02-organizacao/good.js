// ✅ EXEMPLO DE CÓDIGO BEM ORGANIZADO
// Fluxo de pedido: validação de idade, escolha de endereço, cálculo de frete, fechamento

/*
🧠 Por que esse código está bem escrito e organizado?

- Ordem lógica do fluxo: validações são feitas antes de ações dependentes delas (ex: só calcula frete depois de validar idade e endereço).
- Responsabilidades separadas: cada função cuida de um pedaço específico do processo (validar, calcular, coordenar).
- Função principal clara: a `fecharPedido` funciona como um "roteiro" do que acontece — é fácil de entender o passo a passo da operação.
- Nomes descritivos: as funções dizem exatamente o que fazem (`validarIdade`, `enderecoValido`, `calcularFrete`).
- Código testável: todas as partes podem ser testadas de forma isolada (testar só a validação de idade, por exemplo).
*/

///////////////////////
// 1. Função principal
///////////////////////

function fecharPedido(pedido, cliente, endereco) {
  if (!validarIdade(cliente)) {
    console.log("Cliente não pode realizar o pedido");
    return;
  }

  if (!enderecoValido(endereco)) {
    console.log("Endereço inválido");
    return;
  }

  const frete = calcularFrete(endereco.cep);
  if (frete === null) {
    console.log("Não foi possível calcular o frete");
    return;
  }

  console.log("Pedido fechado com sucesso!", pedido);
}

////////////////////////
// 2. Validações
////////////////////////

function validarIdade(cliente) {
return cliente.idade >= 18;
}

function enderecoValido(endereco) {
return endereco.rua && endereco.numero && endereco.cep;
}

////////////////////////
// 3. Utilitários
////////////////////////

function calcularFrete(cep) {
if (!cep) return null;
// Simulação de cálculo de frete com base no CEP
return 15.9;
}