// ❌ EXEMPLO DE CÓDIGO DESORGANIZADO
// Fluxo de pedido: validação de idade, escolha de endereço, cálculo de frete, fechamento

/*
🧠 Por que esse código está mal escrito e desorganizado?

- Ordem do fluxo confusa: a função `fecharPedido` começa tentando calcular o frete antes mesmo de validar se o cliente pode comprar — o ideal seria validar o cliente primeiro.
- Responsabilidade misturada: a função `fecharPedido` toma várias decisões (validações, cálculo, mensagens). Ela deveria coordenar, não fazer tudo.
- Mensagens misturadas com lógica: os `console.log()` estão espalhados dentro de condicionais, o que torna difícil testar o comportamento da função.
- Funções auxiliares mal nomeadas ou vagas: `escolherEndereco` parece que vai “selecionar um endereço”, mas na prática só faz uma validação. Nome e ação não batem.
- Fluxo quebrado com muitos `return`: em vez de um fluxo claro de etapas, o código sai por vários caminhos diferentes — o que dificulta o rastreio de erros.
*/

function fecharPedido(pedido, cliente, endereco) {
    const frete = calcularFrete(endereco.cep);
    if (!frete) {
        console.log("Não foi possível calcular o frete");
        return;
    }

    if (!escolherEndereco(endereco)) {
        console.log("Endereço inválido");
        return;
    }

    if (!validarIdade(cliente)) {
        console.log("Cliente não pode realizar o pedido");
        return;
    }

    console.log("Pedido fechado com sucesso!");
}

function calcularFrete(cep) {
    if (!cep) return null;
    return 15.9;
}

function validarIdade(cliente) {
    return cliente.idade >= 18;
}

function escolherEndereco(endereco) {
    if (!endereco.rua || !endereco.numero || !endereco.cep) {
        return false;
    }
    return true;
}