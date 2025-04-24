// 🧠 EXERCÍCIO: Reescrevendo uma classe com boas práticas
//
// O código abaixo usa uma classe, mas está mal estruturado e com nomes pouco descritivos.
// Sua missão é refatorar esse código com:
// - nomes claros para atributos e métodos
// - uma estrutura mais organizada
// - boas práticas de nomenclatura
// - existe um bug escondido relacionado às linhas 21 e 26
//
// ❌ Código original:

class P {
  constructor(n, i, m, d) {
    this.n = n;
    this.i = i;
    this.m = m;
    this.d = d;
  }

  f() {
    console.log(this.n + " tem " + this.i + " anos e toma " + this.m.length + " medicamentos para o tratamento de " + this.d);
  }
}

const c = new P("João", 45, ["Losartana", "Atorvastatina"], "hipertensão");
console.log(c.f());


// ✅ Solução com boas práticas

class Paciente {
  constructor(nome, idade, medicamentos, diagnostico) {
    this.nome = nome;
    this.idade = idade;
    this.medicamentos = medicamentos;
    this.diagnostico = diagnostico;
  }

  descreverTratamento() {
    console.log(
      `${this.nome} tem ${this.idade} anos e toma ${this.medicamentos.length} medicamento(s) para o tratamento de ${this.diagnostico}.`
    );
  }
}

const paciente = new Paciente("João", 45, ["Losartana", "Atorvastatina"], "hipertensão");
paciente.descreverTratamento();
