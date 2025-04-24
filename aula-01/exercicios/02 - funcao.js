// 🧠 EXERCÍCIO: Simplificando a leitura de uma função
//
// O código abaixo está funcional, mas os nomes usados para variáveis, parâmetros e propriedades
// dificultam o entendimento.
//
// Sua missão é refatorar esse código com:
// - nomes claros para parâmetros e variáveis
// - nomes de propriedades compreensíveis
// - boas práticas de nomenclatura
//
// ❌ Código original:

function x1(y2) {
  let z3 = [];
  for (let a4 of y2) {
    if (!a4.q) {
      z3.push(a4);
    }
  }
  return z3;
}

const m = [
  { n: "Paracetamol", q: true },
  { n: "Ibuprofeno", q: false },
  { n: "Amoxicilina", q: true },
  { n: "Omeprazol", q: false }
];

console.log(x1(m)); // Esperado: Lista de medicamentos que o paciente ainda não tomou



// ✅ Solução com boas práticas

function pegarMedicamentosNaoTomados(medicamentos) {
  let naoTomados = [];
  for (let medicamento of medicamentos) {
    if (!medicamento.foiTomado) {
      naoTomados.push(medicamento);
    }
  }
  return naoTomados;
}

const medicamentosDoPaciente = [
  { nome: "Paracetamol", foiTomado: true },
  { nome: "Ibuprofeno", foiTomado: false },
  { nome: "Amoxicilina", foiTomado: true },
  { nome: "Omeprazol", foiTomado: false }
];

console.log(pegarMedicamentosNaoTomados(medicamentosDoPaciente));
// Esperado: lista de medicamentos que o paciente ainda não tomou
