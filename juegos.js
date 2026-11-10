// El catálogo de Fichines. Para sumar un juego, agregá un bloque a esta lista.
// Los pasos están en README.md. Tocá solo tu bloque: cada cambio en main sale en vivo. Campos:
//   nombre, autor      obligatorios
//   jugar, descargar   al menos uno: el link para jugar en el navegador o para bajar el juego
//   descripcion        una o dos oraciones (hasta 240 caracteres)
//   imagen             opcional: 'img/mi-juego.jpg' (16:9) o un link; sin imagen se dibuja una portada
//   plataformas        opcional: ['Navegador', 'Celular', 'Windows', 'Mac', 'Linux']
//   color              opcional: el color del botón, por ejemplo '#ffd23a'
window.JUEGOS = [
  {
    nombre: 'Sideways Rally',
    autor: 'ores999',
    descripcion: 'Rally en el navegador: 6 tramos de ida y de vuelta, de noche y con lluvia, autos clásicos, copiloto que canta las notas y salas online para correr con amigos.',
    imagen: 'img/sideways-rally.jpg',
    jugar: 'https://ores999.github.io/sideways-rally/',
    plataformas: ['Navegador', 'Celular'],
    color: '#ffd23a',
  },
  {
    nombre: 'El Imperio de la Muerte',
    autor: 'Tomás Sosa',
    descripcion: 'Terror en primera persona en las Catacumbas de París: encontrá la llave, abrí la reja y subí la escalera mientras cinco criaturas te cazan. Linterna con poca pila y ningún mapa.',
    imagen: 'img/el-imperio-de-la-muerte.jpg',
    jugar: 'juegos/el-imperio-de-la-muerte/',
    plataformas: ['Navegador'],
    color: '#a4532c',
  },
];
