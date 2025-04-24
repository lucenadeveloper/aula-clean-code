// 🧠 EXERCÍCIO FINAL – Testabilidade: Prescrição Segura

/*
Desafio:
O sistema precisa validar uma prescrição médica com base em critérios definidos pelo setor de qualidade.

Sua missão:
➡️ Refatore o código abaixo aplicando boas práticas de testabilidade.

📌 Regras da prescrição:
1. O nome do paciente deve estar preenchido
2. A dose deve estar entre 100mg e 500mg
3. O medicamento deve estar na lista de aprovados

🎯 O código original usa console.log e mistura tudo numa única função.
Transforme isso em código testável, com funções separadas e mensagens retornadas.
*/

// Código original para refatorar

function prescrever(paciente, dose, medicamento) {
  if (!paciente) {
    console.log("Paciente não informado");
  } else if (dose < 100 || dose > 500) {
    console.log("Dose inválida");
  } else if (medicamento !== "Paracetamol" && medicamento !== "Ibuprofeno") {
    console.log("Medicamento não aprovado");
  } else {
    console.log("Prescrição enviada com sucesso");
  }
}

// Lista de medicamentos aprovados
const medicamentosAprovados = ["Paracetamol", "Ibuprofeno"];

// TODO: Criar funções de validação separadas:
// - validarPaciente
// - validarDose
// - validarMedicamento

// TODO: Criar a função principal `prescrever` que retorna mensagens, sem console.log direto

// TODO: Testar a função com os seguintes casos:
console.log(prescrever("Maria", 400, "Paracetamol")); // Prescrição enviada com sucesso
console.log(prescrever("", 400, "Paracetamol"));       // Paciente não informado
console.log(prescrever("João", 50, "Paracetamol"));    // Dose inválida
console.log(prescrever("João", 300, "Cloroquina"));    // Medicamento não aprovado


// ✅ RESPOSTA SUGERIDA:

function validarPaciente(nome) {
  return nome ? null : "Paciente não informado";
}

function validarDose(dose) {
  return dose >= 100 && dose <= 500 ? null : "Dose inválida";
}

function validarMedicamento(medicamento) {
  return medicamentosAprovados.includes(medicamento)
    ? null
    : "Medicamento não aprovado";
}

function prescrever(paciente, dose, medicamento) {
  return (
    validarPaciente(paciente) ||
    validarDose(dose) ||
    validarMedicamento(medicamento) ||
    "Prescrição enviada com sucesso"
  );
}