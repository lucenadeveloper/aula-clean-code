// 😬 Exagero total só pra somar preço + frete

class Produto {
    constructor(nome, preco, frete) {
      this.nome = nome;
      this.preco = preco;
      this.frete = frete;
    }
  
    calcularTotal() {
      return this.preco + this.frete;
    }
  }
  
  class Venda {
    constructor(produto) {
      this.produto = produto;
    }
  
    processarVenda() {
      return this.produto.calcularTotal();
    }
  }
  
  const dipirona = new Produto("Dipirona", 19.9, 5.0);
  const vendaDipirona = new Venda(dipirona);
  console.log("Total:", vendaDipirona.processarVenda());
  
  // 🧠 Problemas:
  // - 2 classes pra somar 2 números
  // - Complexidade sem necessidade
  // - Mais difícil de ler, entender e manter