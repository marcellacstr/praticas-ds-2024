class PagamentoStrategy {
    processarPagamento(valor) {
        throw new Error("Método 'processarPagamento' deve ser implementado.");
    }
}

class PagamentoCartaoCredito extends PagamentoStrategy {
    processarPagamento(valor) {
        console.log(`Pagando ${valor} com cartão de crédito.`);
    }
}

class PagamentoPayPal extends PagamentoStrategy {
    processarPagamento(valor) {
        console.log(`Pagando ${valor} com PayPal.`);
    }
}

class SistemaPagamento {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    realizarPagamento(valor) {
        this.strategy.processarPagamento(valor);
    }
}

const pagamentoComCartao = new PagamentoCartaoCredito();
const pagamentoComPayPal = new PagamentoPayPal();

const sistema = new SistemaPagamento(pagamentoComCartao);
sistema.realizarPagamento('R$100,00'); // Deve exibir "Pagando R$100,00 com cartão de crédito."

sistema.setStrategy(pagamentoComPayPal);
sistema.realizarPagamento('R$200,00'); // Deve exibir "Pagando R$200,00 com PayPal."
