// Nome da função (s) não diz nada.
// Parâmetros sem sentido (t, l, c, a).
function s(t, l, c, a) {
    let r = "";
    // Lógica repetitiva.
    if (t) r += "pão ";
    if (l) r += "alface ";
    if (c) r += "queijo ";
    if (a) r += "presunto ";
    return r;
  }
  const x = s(true, true, false, true);
  // Output: Sanduíche: pão alface presunto 
  console.log("Sanduíche: " + x);
  