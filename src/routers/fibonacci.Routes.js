const { Router } = require('express');
const FibonacciController = require('../controllers/fibonacciController');
class FibonacciRouter {
    constructor() {
        this.router = Router();
        this.#config();
    }
    #config() {
        const objFibonacciC = new FibonacciController();

        this.router.get('/calcular-fibonacci', objFibonacciC.calcularFibonacci);

    }

}

module.exports = FibonacciRouter;