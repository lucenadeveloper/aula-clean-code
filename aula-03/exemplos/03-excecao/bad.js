// 😬 Simulação de uma venda mal feita, sem tratamento de erro

function registrarVenda(paciente, medicamento) {
    const nomeCliente = paciente.nome.toUpperCase(); // pode falhar se paciente for null
  
    if (medicamento.preco <= 0) {
      throw "Preço inválido"; // erro cru, sem contexto
    }
  
    const valorTotal = medicamento.preco + medicamento.frete; // frete pode estar undefined
    return `Venda registrada para ${nomeCliente}. Valor total: R$ ${valorTotal}`;
  }
  
  // Simulação de uso
  const resultado = registrarVenda(null, { preco: -10 });
  console.log(resultado);
  
  // 🧠 Problemas:
  // - A função quebra se paciente for null
  // - "throw" sem contexto útil pro usuário
  // - frete pode estar ausente e causar NaN
  // - Nenhum tratamento, sistema quebra direto
  // - Não é possível saber o que exatamente deu errado