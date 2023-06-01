let listadoComentarios = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem n…iatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur\naut …mus et vero voluptates excepturi deleniti ratione",
  },
  {
    postId: 1,
    id: 4,
    name: "alias odio sit",
    email: "Lew@alysha.tv",
    body: "non et atque\noccaecati deserunt quas accusantium u…r itaque dolor\net qui rerum deleniti ut occaecati",
  },
  {
    postId: 1,
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
    body: "harum non quasi et ratione\ntempore iure ex volupta…ugit inventore cupiditate\nvoluptates magni quo et",
  },
  {
    postId: 2,
    id: 6,
    name: "et fugit eligendi deleniti quidem qui sint nihil autem",
    email: "Presley.Mueller@myrl.com",
    body: "doloribus at sed quis culpa deserunt consectetur q…utem\nvoluptatem repellendus aspernatur dolorem in",
  },
  {
    postId: 2,
    id: 7,
    name: "repellat consequatur praesentium vel minus molestias voluptatum",
    email: "Dallas@ole.me",
    body: "maiores sed dolores similique labore et inventore … corporis molestiae mollitia quia et magnam dolor",
  },
  {
    postId: 2,
    id: 8,
    name: "et omnis dolorem",
    email: "Mallory_Kunze@marie.org",
    body: "ut voluptatem corrupti velit\nad voluptatem maiores…samus maiores\nvoluptates quia aliquid ullam eaque",
  },
  {
    postId: 2,
    id: 9,
    name: "provident id voluptas",
    email: "Meghan_Littel@rene.us",
    body: "sapiente assumenda molestiae atque\nadipisci laboru…natur odit sit rem expedita\nquas enim ipsam minus",
  },
  {
    postId: 2,
    id: 10,
    name: "eaque et deleniti atque tenetur ut quo ut",
    email: "Carmen_Keeling@caroline.name",
    body: "voluptate iusto quis nobis reprehenderit ipsum ame…s\nnostrum quaerat nulla et accusamus nisi facilis",
  },
  {
    postId: 3,
    id: 11,
    name: "fugit labore quia mollitia quas deserunt nostrum sunt",
    email: "Veronica_Goodwin@timmothy.net",
    body: "ut dolorum nostrum id quia aut est\nfuga est invent…s quo est\nut blanditiis quia ut vel ut maiores ea",
  },
];

// Tenemos un listado de comentarios como punto de partida. Estos van a funcionar como registros en una base de datos.
// Vamos a simular conectarnos con una API para recuperar los comentarios y verlos en pantalla.

/* -------------------------------------------------------------------------- */
/*                      [1] FUNCION: Escuchamos el click                      */
/* -------------------------------------------------------------------------- */
const boton = document.querySelector("button");

boton.addEventListener("click", function () {
  console.log("Click para ver comentarios...");

  // Esta funcion retorna una promesa, por eso capturamos su resultado con el then()
  consultaAsincrona("endpoint")
    .then((respuesta) => renderizarElementos(listadoComentarios))
    .then(console.log(respuesta));
});

/* -------------------------------------------------------------------------- */
/*                       [4] FUNCION: Consulta a la API                       */
/* -------------------------------------------------------------------------- */
// En este caso vamos a consultar a un servidor del cual nos vamos a traer la data.
// Esta API tiene su documentaci贸n en: https://jsonplaceholder.typicode.com/
// Vamos a implementar el endpoint que nos devuelve comentarios para mostrarlos en pantalla.

function consultaApi(endpoint) {

    try{
    // con el fetch generamos la request a la API ---> le pasamos el endpoint
    fetch(endpoint)
      // el fetch retorna una promesa, por eso capturamos su resultado con el then()
      .then((objetoRespuesta) => {
      // parseo de JSON a objeto
        return objetoRespuesta.json();
      })
      // obtengo la respuesta "procesada", con los datos que puedo manipular
      .then((datosJs) => {
        
        renderizarElementos(datosJs);
      });
    } catch (error) {
      console.log(error);
    }
  }
  /* -------------------------------------------------------------------------- */
/*                      [5] FUNCION: Escuchamos el click                      */
/* -------------------------------------------------------------------------- */
// Vamos a reimplementar la escucha del click para lanzar las nuevas funciones.

const boton = document.querySelector("button");
const endpoint = "https://jsonplaceholder.typicode.com/comments";

boton.addEventListener("click", function () {
  console.log("Click para ver comentarios...");
  consultaApi(endpoint);
});

/* -------------------------------------------------------------------------- */
/*                      [6] FUNCION: renderizar elementos                     */
/* -------------------------------------------------------------------------- */
// Ac谩 vamos a reutilizar la funci贸n de renderizar elementos, implementando
// el .map() y .join() para obtener el resultado esperado.

function renderizarElementos(listado) {
  const comentarios = document.querySelector(".comentarios");
// 4- Solo deben cargarse los primeros 10 comentarios que nos llegan.
  const primerosDiez = listado.slice(0, 10);
  const html = primerosDiez.map((comentario) => {
    return `<div class="comentario">
              <h4>${comentario.email}</h4>
              <p>${comentario.body}</p>
            </div>`;
  });
  comentarios.innerHTML = html.join("");
  boton.style.display = "none";
}





