type Dni = number;

interface Persona{
  altura?: number; //opzionale
  edad: number;
  nombre: string;
  apellido: string;
  dni: Dni;
}

const persona: Persona = {
  altura: 1.69,
  edad: 27,
  nombre: 'Alan',
  apellido: 'Buscaglia',
  dni: 36601731
}