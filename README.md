# Fichines

Juegos hechos por amigos, todos en un solo lugar: **https://fichines.github.io/**

Es un repo compartido: quien forma parte de la organización `fichines` sube sus juegos acá. Es una página estática: `index.html` + `juegos.js` (la lista) + `img/` (las portadas) + `juegos/` (los juegos alojados acá). No tiene backend, ni dependencias, ni paso de build.

**Cada cambio en `main` queda en vivo en un minuto.** Tocá solo tu carpeta y tu entrada de la lista. Para ver la página en tu compu, abrí `index.html` con doble clic.

## Subir tu juego desde la web de GitHub

No hace falta instalar nada.

1. **Subí el juego** (si ya está online en otro lado, saltá al paso 3).
   - Abrí https://github.com/fichines/fichines.github.io/upload/main/juegos
   - Arrastrá la carpeta de tu juego, que tiene que tener un `index.html` adentro. Va a quedar en `juegos/tu-juego/`.
   - Abajo de todo, tocá **Commit changes**.
2. **Subí una portada** (opcional) en https://github.com/fichines/fichines.github.io/upload/main/img: apaisada 16:9, unos 1280×720, menos de 300 KB. Sin imagen se dibuja una portada con el nombre del juego.
3. **Agregá tu juego a la lista.** Abrí https://github.com/fichines/fichines.github.io/edit/main/juegos.js y sumá un bloque antes del `];` final:

   ```js
   {
     nombre: 'Nombre del juego',
     autor: 'Quién lo hizo',
     descripcion: 'Una o dos oraciones.',
     imagen: 'img/tu-juego.jpg',
     jugar: 'juegos/tu-juego/',
     plataformas: ['Navegador', 'Celular'],
     color: '#5ec8e5',
   },
   ```

   Dejá la coma del final de cada bloque y tocá **Commit changes**.
4. **Probalo** en https://fichines.github.io/ después de un minuto. Si la página avisa que no pudo cargar la lista, quedó un error de tipeo en `juegos.js`: corregilo o deshacé el cambio.

Obligatorios: `nombre`, `autor` y al menos uno de `jugar` o `descargar`. Una entrada incompleta no se muestra.

### Si tu juego no carga

Dentro de la carpeta, usá rutas relativas (`assets/auto.png`, no `/assets/auto.png`), porque el juego no está en la raíz del sitio. El nombre de la carpeta conviene en minúsculas y sin espacios.

## Dónde poner cada tipo de juego

| El juego es... | Dónde va | Qué campo |
| --- | --- | --- |
| Web, ya online | Donde esté | `jugar: 'https://...'` |
| Web, sin publicar | Una carpeta en `juegos/` | `jugar: 'juegos/tu-juego/'` |
| Un ejecutable (Windows, Mac, etc.) | itch.io o los [Releases](https://github.com/fichines/fichines.github.io/releases) de este repo | `descargar: 'https://...'` |

Un juego puede tener `jugar` y `descargar` a la vez, y la tarjeta muestra los dos botones.

Límites de GitHub: la web acepta hasta 25 MB por archivo y unos 100 archivos por vez; por `git`, hasta 100 MB por archivo. Un sitio de Pages debería quedar por debajo de 1 GB, y un archivo en Releases puede llegar a 2 GB. Por eso los ejecutables no van en el repo.

## Reglas para convivir

- **`localStorage`:** todos los juegos de `juegos/` comparten el mismo. Poné un prefijo propio en tus claves (`mijuego.record`) y no uses `localStorage.clear()`, porque borra las partidas de los demás juegos.
- **Ejecutables:** la página solo los enlaza, no los revisa. Sumá solo los de gente en la que confíes.
- **Alguien de afuera:** el botón "Subir un juego" (o https://fichines.github.io/#subir) arma un bloque listo para pegar y lo manda por WhatsApp o como issue. No publica nada solo: alguien del grupo lo agrega a `juegos.js`.

## Sideways Rally

Sideways Rally se queda en su repo y en su URL, https://ores999.github.io/sideways-rally/, con sus links de desafío y salas. Acá solo está enlazado. Al estar en otro dominio, ningún juego de este repo puede tocar sus partidas guardadas.
