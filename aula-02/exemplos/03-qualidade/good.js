// ✅ Código com qualidade de software
// Boas práticas aplicadas:
// - Funções com responsabilidade única (Single Responsibility Principle)
// - Nomes descritivos e consistentes
// - Validações claras e específicas
// - Separação de dados (lista de medicamentos aprovada fora da lógica principal)
// - Retorno de mensagens em vez de console.log direto (melhor para testes automatizados)

const medicamentosAprovados = ["Paracetamol", "Ibuprofeno"];

function validarPaciente(nome) {
    if (!nome) return "Erro: paciente não informado.";
    return null;
}

function validarDose(doseMg) {
    if (doseMg < 100 || doseMg > 500) {
        return "Erro: dose fora da faixa segura.";
    }
    return null;
}

function validarMedicamento(nomeMedicamento) {
    if (!medicamentosAprovados.includes(nomeMedicamento)) {
        return "Erro: medicamento não está na lista aprovada.";
    }
    return null;
}

function validarPrescricao(paciente, dose, medicamento) {
    return (
        validarPaciente(paciente) ||
        validarDose(dose) ||
        validarMedicamento(medicamento) ||
        "Prescrição válida."
    );
}

// Testes de exemplo
console.log(validarPrescricao("Ana", 700, "Cloroquina")); // Erro: dose fora da faixa segura.
console.log(validarPrescricao("Ana", 400, "Paracetamol")); // Prescrição válida.