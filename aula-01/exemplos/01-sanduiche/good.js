// Nomes descritivos para função e parâmetros.
function montarSanduiche({ temPao, temAlface, temQueijo, temPresunto }) {
    // Uso de array para montar os ingredientes.
    const ingredientes = [];

    // Código modular e fácil de entender.
    if (temPao) ingredientes.push("pão");
    if (temAlface) ingredientes.push("alface");
    if (temQueijo) ingredientes.push("queijo");
    if (temPresunto) ingredientes.push("presunto");
  
    return ingredientes.join(", ");
  }

  // Mais fácil de testar e manter.
  const meuSanduiche = montarSanduiche({
    temPao: true,
    temAlface: true,
    temQueijo: false,
    temPresunto: true
  });

  // Output: Sanduíche: pão, alface, presunto
  console.log("Sanduíche:", meuSanduiche);
  