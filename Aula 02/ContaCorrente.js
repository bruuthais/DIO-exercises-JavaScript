// Dados e manipulação da conta corrente :)

import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDaConta = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }


    //#saldo = 0; --- Proposta da comunidade para deixa privado
    _saldo = 0; //Atualmente usa-se isso para apenas avisar que é privado
    
    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor; 
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDaConta += 1;
    }
}