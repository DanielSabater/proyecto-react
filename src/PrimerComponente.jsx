import './styles/PrimerComponente.css';

const string = "Hola Mundo";
const number = 42;
const boolean = true;
const array = ["mi nombre es dani", 500000, 3];
const funcion = () => "Hola desde una función";
const fecha = new Date();
const objeto = { nombre: "Curso de Javascript", duracion: 4 };


export const PrimerComponente = () => {
  return (
    <>
      <h1>Variables en JSX</h1>
      <h4>Variable tipo String:</h4> <p>{string}</p>
      <h4>Variable tipo number:</h4> <p>{number}</p>
      <h4>Variable tipo boolean:</h4> <p>{boolean}</p>
      <h4>Variable tipo array:</h4> <p>{array}</p>
      <h4>Variable tipo String:</h4> <p>{funcion()}</p>
      <h4>Variable tipo fecha:</h4> <p>{fecha.toString()}</p>
      <h4>Variable tipo objeto:</h4> <p>{objeto.nombre} — {objeto.duracion}</p> 
    </>
  );
};
