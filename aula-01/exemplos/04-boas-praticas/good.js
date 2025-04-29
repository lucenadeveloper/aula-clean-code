// ✅ EXEMPLO BOM – Cadastro de Cliente com Boas Práticas
// Melhorias aplicadas:
// - Nomes de funções e variáveis claros e descritivos
// - Separação de responsabilidades (geração de ID em outra função)
// - Mensagens de erro úteis para o usuário
// - Facilita a manutenção e entendimento do código

function cadastrarCliente(nomeCliente) {
  if (nomeCliente === "") {
    console.error("⚠️ Nome do cliente não pode ser vazio.");
    return;
  }

  const novoCliente = {
    nome: nomeCliente,
    id: gerarIdCliente(),
    dataCadastro: new Date(),
  };

  console.log("✅ Cliente cadastrado com sucesso:", novoCliente);
}

function gerarIdCliente() {
  // Gera um ID simples de forma randômica (simulação)
  return Math.floor(Math.random() * 1000);
}

cadastrarCliente("Joana");

