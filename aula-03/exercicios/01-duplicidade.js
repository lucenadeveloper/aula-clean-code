// 🧠 EXERCÍCIO – Código duplicado: Evite retrabalho no caixa

/*
Desafio:
O sistema de farmácia precisa calcular o valor final de venda com base no preço do medicamento e no valor do frete.

Mas o código foi duplicado em vários pontos do sistema 😬

Sua missão:
➡️ Refatorar o código para eliminar duplicação e tornar mais fácil a manutenção.

📌 Regras:
1. O valor final é o preço do medicamento + valor do frete
2. Cada ponto de venda calcula isso de forma separada hoje
3. Você deve criar uma função chamada `calcularValorFinal(preco, frete)`

🧠 Dica:
"Se você precisa mudar o valor do frete em 5 lugares... tá na hora de usar uma função!"
*/

// Código original (duplicado)
let totalA = 49.90 + 5.00;
console.log("Venda no Caixa A: R$ " + totalA);

let totalB = 89.90 + 5.00;
console.log("Venda no Caixa B: R$ " + totalB);

let totalC = 29.90 + 5.00;
console.log("Venda no Caixa C: R$ " + totalC);

// TODO: Criar a função calcularValorFinal(preco, frete)
// TODO: Substituir os cálculos acima pelo uso da função
// TODO: O código deve ficar mais limpo e reaproveitável


// ✅ RESPOSTA SUGERIDA:

function calcularValorFinal(preco, frete) {
  return preco + frete;
}

console.log("Venda no Caixa A: R$ " + calcularValorFinal(49.90, 5.00));
console.log("Venda no Caixa B: R$ " + calcularValorFinal(89.90, 5.00));
console.log("Venda no Caixa C: R$ " + calcularValorFinal(29.90, 5.00));