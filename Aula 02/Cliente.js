//Cadastro de clientes :)

export class Cliente {   // class para criar o molde do cliente

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

}
