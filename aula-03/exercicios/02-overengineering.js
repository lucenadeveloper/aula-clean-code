// 🧠 EXERCÍCIO – Overengineering: menos é mais

/*
Desafio:
O dev anterior ficou empolgado e criou uma estrutura super complexa só pra calcular o valor total de uma venda com frete.

➡️ Sua missão é simplificar esse código, mantendo o mesmo comportamento.

📌 O que está exagerado?
- Uso de classe desnecessária
- Criação de objeto onde um número bastaria
- Lógica separada sem ganho real

🎯 O objetivo é: código simples, direto e fácil de entender

💊 Contexto: cálculo de valor final de venda de um medicamento com frete incluso
*/

// Código atual (overengineering)
class Produto {
  constructor(nome, valorBase, frete) {
    this.nome = nome;
    this.valorBase = valorBase;
    this.frete = frete;
  }

  calcularTotal() {
    return this.valorBase + this.frete;
  }
}

const venda = new Produto("Dipirona", 19.9, 5.0);
console.log("Total da venda:", venda.calcularTotal());

// TODO: Refatore esse código para algo mais simples e direto
// - Sem classe
// - Com função simples
// - Com nomes claros



// ✅ RESPOSTA SUGERIDA:

function calcularTotalVenda(valorBase, frete) {
  return valorBase + frete;
}

console.log("Total da venda:", calcularTotalVenda(19.9, 5.0));
