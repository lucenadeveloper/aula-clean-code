function x(p) {
  p.r = p.m.length;
  p.s = p.n + " está usando " + p.r + " medicamentos.";
  console.log("Banco:", p.s);
}

const z = {
  n: "Maria",
  m: ["Paracetamol", "Ibuprofeno"]
};

function y() {
  x(z);
}
