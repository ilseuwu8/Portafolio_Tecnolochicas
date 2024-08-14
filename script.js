// CRUD = Crear Leer Actualizar Borrar

//alert("Hola Mundo <3"); es una ventana de aviso, sale cada vez que se recarga la página.

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
//typewrite es lo que va a escribir
typewriter
//Usar ek punto es para llamar a una propiedad o una accióndel objeto.
//Las acciones se distinguen por los paréntesis ()
  .pauseFor(1000)
  .typeString('Ilse Arteaga')
  .pauseFor(300)
  .deleteAll ()
  .typeString('Desarrolladora Fronted JR')
  .pauseFor(1000)
  .start();
