// 🧠 EXERCÍCIO: Nomeando variáveis com clareza
//
// O código abaixo funciona corretamente, mas os nomes das variáveis não são claros
// e dificultam o entendimento do que ele realmente faz.
//
// Sua missão é refatorar esse código com:
// - nomes descritivos e coerentes
// - sem usar letras soltas
// - mantendo o funcionamento original do código
//
// ❌ Código original:

let a = ["Ana", "João", "Carlos", "Maria"];
let b = 0;

for (let c of a) {
  if (c.includes("a") || c.includes("A")) {
    b++;
  }
}

console.log("Total:", b);



// ✅ Solução com boas práticas

let nomes = ["Ana", "João", "Carlos", "Maria"];
let nomesComLetraA = 0;

for (let nome of nomes) {
  if (nome.includes("a") || nome.includes("A")) {
    nomesComLetraA++;
  }
}

console.log("Total:", nomesComLetraA);
