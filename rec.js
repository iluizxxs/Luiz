class funcionario {
    constructor(nome, idade, salario) {
      this.nome = nome;
      this.idade = idade;
      this.salario = salario;
    }

    calcularBonus(percentual){
        return(this.salario*(percentual/100))
    }

    imprimirDados(){
        return(this.nome + this.idade + this.salario)
    }

    }

    class Gerente extends funcionario{
        constructor(message);
        super(message);
        this.name = funcionario
        this.departamento = "Onde o gerente trabalha"
        

    }

    const funcinario = new funcionario("João", 25, 1000);
    const Gerente = new Gerente("Gustavo", 32, 1000,"Sao Paulo");

    console.log(calcularBonus);
    console.log(imprimirDados);

    //imprimindoAtributos
//console.log(atributos.nome);   
//console.log(atributos.idade);  
//console.log(atributos.salario);
