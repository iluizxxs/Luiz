class MeuErro extends Error {
    constructor(message){
      super(message);
      this.estudante = estudante;
      this.cosplay = cosplay;
      this.nota_cosplay = nota_cosplay
    }
  }
  
  class NerdIF {
    constructor(estudante, cosplay, nota_cosplay) {
      this.estudante = estudante;
      this.cosplay = cosplay;
      this.nota_cosplay = nota_cosplay;
    }
  
    retornarAtributos() {
      return this.atributos()
    } 
  
    atributos() {
      return {
        estudante: 
        this.estudante,
        cosplay: this.cosplay,
        nota_cosplay: this.nota_cosplay
      };
    }
  }
  
  const aluno = new NerdIF("João", "Homem-Aranha", 9.5);
  const atributos = aluno.retornarAtributos();
  
  conaole.log(atributos)
  //console.log(atributos.estudante); 
  //console.log(atributos.cosplay);   
  //console.log(atributos.nota_cosplay);