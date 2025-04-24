// 😀 Função com validação, tratamento de erro e mensagens compreensíveis

function registrarVenda(paciente, medicamento) {
    try {
      if (!paciente || !paciente.nome) {
        throw new Error("Paciente não informado");
      }
  
      if (!medicamento || typeof medicamento.preco !== "number" || medicamento.preco <= 0) {
        throw new Error("Preço do medicamento inválido");
      }
  
      const frete = medicamento.frete ?? 5.0; // valor padrão
      const nomeCliente = paciente.nome.toUpperCase();
      const valorTotal = medicamento.preco + frete;
  
      return `Venda registrada para ${nomeCliente}. Valor total: R$ ${valorTotal.toFixed(2)}`;
    } catch (erro) {
      return `Erro ao registrar venda: ${erro.message}`;
    }
  }
  
  // Testes
  console.log(registrarVenda(null, { preco: 19.9 }));
  console.log(registrarVenda({ nome: "Joana" }, { preco: -5 }));
  console.log(registrarVenda({ nome: "Lucas" }, { preco: 22.5, frete: 3.5 }));
  
  // 🧠 Vantagens:
  // - Validação de dados obrigatórios
  // - Erros tratados com clareza
  // - Mensagens informativas para o usuário
  // - Código flexível e reaproveitável