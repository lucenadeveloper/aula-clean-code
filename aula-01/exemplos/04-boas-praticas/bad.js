// 💩 EXEMPLO RUIM – Cadastro de Cliente com Código Confuso

function a(b, c) {
  if (b === "") {
    console.log("Erro");
    return;
  }
  const d = {
    n: b,
    i: Math.random() * 1000,
    f: new Date(),
  };
  console.log("Feito:", d);
}

a("Joana", true);

// Problemas deste código:
// - Função com nome genérico e sem sentido (a)
// - Parâmetros sem nome descritivo (b, c)
// - Sem separação de responsabilidade (validação + criação + log tudo junto)
// - Nomes de variáveis dentro da função (d, n, i, f) não são claros
// - Mensagem de erro genérica ("Erro")
// - Falta clareza do que a função realmente faz