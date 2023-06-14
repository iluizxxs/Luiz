

class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos(){
    try{
      return this.atributos();
    }catch (erro){
    console.log(erro)
    }
} 

atributos() {
    if(this.nome != "" && this.idade != "" && this.especie != ""){
        return this.nome + this.idade + this.especie
    }else{
         throw new MeuErro("Campo não identificado")
    }
}
}

const meuAnimal = new Animal("", 3, "cachorro");
const atributos = meuAnimal.mostrarAtributos();


console.log(atributos)
// Imprimindo os atributos
//console.log(atributos.nome);   
//console.log(atributos.idade);  
//console.log(atributos.especie);