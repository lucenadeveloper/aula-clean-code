function calcularTotalMedicamentos(paciente) {
  return paciente.medicamentos.length;
}

function gerarRelatorio(paciente, totalMedicamentos) {
  return `${paciente.nome} está utilizando ${totalMedicamentos} medicamento(s).`;
}

function salvarRelatorioNoBanco(relatorio) {
  console.log("Salvando no banco de dados:", relatorio);
}

// Uso
const paciente = {
  nome: "Maria",
  medicamentos: ["Paracetamol", "Ibuprofeno"]
};

function atualizarMedicamentosPaciente(paciente) {
  const total = calcularTotalMedicamentos(paciente);
  const relatorio = gerarRelatorio(paciente, total);
  salvarRelatorioNoBanco(relatorio);
}
