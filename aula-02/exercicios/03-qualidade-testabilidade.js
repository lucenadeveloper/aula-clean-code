// 🧠 EXERCÍCIO – Qualidade de Software: Validador de Prescrição

/*
Você foi chamado para ajudar a validar prescrições médicas no sistema da farmacêutica.

Para isso, implemente uma função `validarPrescricao(paciente, dose, medicamento)` que siga as boas práticas de qualidade de software.

✅ Regras:
1. O nome do paciente deve estar preenchido
2. A dose deve estar entre 100mg e 500mg
3. O medicamento deve estar na lista de aprovados

📌 Use funções separadas para cada validação.
📌 Em vez de usar console.log direto, retorne mensagens (isso facilita os testes).
*/

// Lista de medicamentos aprovados
const medicamentosAprovados = ["Paracetamol", "Ibuprofeno", "Amoxicilina"];

// TODO: Criar a função validarPaciente(nome)
// TODO: Criar a função validarDose(dose)
// TODO: Criar a função validarMedicamento(nomeMedicamento)

// Função principal de validação
function validarPrescricao(paciente, dose, medicamento) {
    // TODO: chamar as funções de validação e retornar a primeira mensagem de erro, se houver
}

// Testes
console.log(validarPrescricao("João", 400, "Paracetamol")); // deve retornar "Prescrição válida."
console.log(validarPrescricao("", 400, "Paracetamol")); // deve retornar erro de paciente
console.log(validarPrescricao("João", 50, "Paracetamol")); // deve retornar erro de dose
console.log(validarPrescricao("João", 400, "Cloroquina")); // deve retornar erro de medicamento




// ✅ RESPOSTA SUGERIDA:

function validarPaciente(nome) {
  return nome ? null : "Erro: paciente não informado.";
}

function validarDose(dose) {
  return dose >= 100 && dose <= 500 ? null : "Erro: dose fora da faixa segura.";
}

function validarMedicamento(medicamento) {
  return medicamentosAprovados.includes(medicamento)
    ? null
    : "Erro: medicamento não está na lista aprovada.";
}

function validarPrescricao(paciente, dose, medicamento) {
  return (
    validarPaciente(paciente) ||
    validarDose(dose) ||
    validarMedicamento(medicamento) ||
    "Prescrição válida."
  );
}