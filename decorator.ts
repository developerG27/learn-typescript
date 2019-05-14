// function log(target, key){
//   console.log(`${key} se ha llamado`);
// }

// class Persona {
//   private name: string;

//   constructor(name: string){
//     this.name = name;
//   }

//   @log
//   sayMyName(){
//     console.log(this.name);
//   }
// }

// const persona: Persona = new Persona('Alan');
// persona.sayMyName(); // 'Alan'

function init(target){
  return class extends target {
    nombre = 'Alan';
    apellido = 'Buscaglia';

    sayMyName(){
      return `${this.nombre} ${this.apellido}`;
    }
  }
}


class P{
  constructor(){

  }
  sayMyName(){

  }
}

const p: P = new P();
console.log(p.sayMyName());