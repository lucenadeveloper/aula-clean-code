// 🧠 EXERCÍCIO – Tratamento de Erros: controle no caos

/*
Desafio:
O sistema de vendas está quebrando quando algum dado vem incompleto ou errado.

➡️ Sua missão é tornar a função `registrarVenda` mais segura e confiável.

📌 O que está errado?
- Nenhuma validação de dados obrigatórios
- Erros não tratados com try/catch
- Código quebra fácil com dados nulos ou inválidos

🎯 O objetivo é: aplicar tratamento de exceção com mensagens claras

💊 Contexto: registro de venda de medicamento com nome de cliente e preço do produto
*/

// Código atual (sem tratamento)
function registrarVenda(paciente, medicamento) {
    const nomeCliente = paciente.nome.toUpperCase();
    const valorTotal = medicamento.preco + medicamento.frete;
    return `Venda registrada para ${nomeCliente}. Total: R$ ${valorTotal}`;
  }
  
  const resultado = registrarVenda(null, { preco: -10 });
  console.log(resultado);
  
  // TODO: Refatore a função para:
  // - Usar try/catch
  // - Validar se paciente e medicamento estão corretos
  // - Lançar ou retornar mensagens claras em caso de erro
  // - Usar valor padrão para frete se estiver ausente
  
  
  // ✅ RESPOSTA SUGERIDA:
  
  function registrarVenda(paciente, medicamento) {
    try {
      if (!paciente || !paciente.nome) {
        throw new Error("Paciente não informado");
      }
  
      if (!medicamento || typeof medicamento.preco !== "number" || medicamento.preco <= 0) {
        throw new Error("Preço do medicamento inválido");
      }
  
      const frete = medicamento.frete ?? 5.0;
      const nomeCliente = paciente.nome.toUpperCase();
      const valorTotal = medicamento.preco + frete;
  
      return `Venda registrada para ${nomeCliente}. Total: R$ ${valorTotal.toFixed(2)}`;
    } catch (erro) {
      return `Erro ao registrar venda: ${erro.message}`;
    }
  }