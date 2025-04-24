// 🧠 EXERCÍCIO: Organização de código
// O código abaixo simula a dispensação de um medicamento com base na dose prescrita.
// Mas está escrito de forma confusa e difícil de manter.
// Sua tarefa é deixá-lo claro, bem indentado e com nomes que façam sentido para alguém que trabalha na área da saúde.

// O que é esperado?
// 1. Renomear a função e o parâmetro com nomes que façam sentido no contexto farmacêutico.
// 2. Corrigir a indentação.
// 3. Comentar o código de forma didática.

// ⚠️ Simulação didática: os valores são fictícios e não refletem uma dose real!

// Avalia a dose prescrita de um medicamento
function verificarDose(doseMg) {
    // Consideramos doses acima de 500mg como altas para este medicamento específico.
    if (doseMg > 500) {
      console.log("Dose alta");
    } else {
      console.log("Dose segura");
    }
  }
  
  // Simulações de uso
  verificarDose(600); // Dose alta
  verificarDose(300); // Dose segura