//Inicio do byteBank

import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

// ----- Cadastro de usuáro -----

const cliente1 = new Cliente("Bruna", 1999988855);

// ----- Criação de conta corrente -----

const contaCorrenteBruna = new Conta(0, cliente1, 1001);
contaCorrenteBruna.depositar(300); // Deposito Inicial

// ----- Criação de conta poupança -----

const contaPoupancaBruna = new Conta(50, cliente1, 1001);
contaPoupancaBruna.depositar(10000);
// ----- Manipulação dos dados -----


// ----- Testes -----
console.log(contaCorrenteBruna);
console.log(contaPoupancaBruna);