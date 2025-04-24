// ❌ Código com baixa qualidade de software
// Problemas:
// - Nomes genéricos e não descritivos (p, n, d, m)
// - Lógica toda embutida em uma função única
// - Mensagens de erro pouco informativas
// - Lista de medicamentos está "dura" no código (hardcoded)
// - Uso direto de console.log dificulta testes automatizados

function p(n, d, m) {
    if (!n) {
      console.log("erro");
    } else if (d < 100 || d > 500) {
      console.log("dose errada");
    } else if (m != "Paracetamol" && m != "Ibuprofeno") {
      console.log("remédio inválido");
    } else {
      console.log("ok");
    }
  }
  
  p("Ana", 700, "Cloroquina");