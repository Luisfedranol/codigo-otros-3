// Tenemos un li de productos
const li = document.getElementById("lista-de-productos") //se manda llamar por el id
const inputFiltro = document.getElementById("filtro-input"); //se manda llamar por el id
const botonDeFiltro = document.getElementById("filtro-boton");

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./assets/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/zapato-rojo.jpg"}
]

function displayProductos(productos) {
  li.innerHTML = ''

  // Iterar sobre los productos y crear elementos HTML
  productos.forEach(producto => { //Se cambia por forEach
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = producto.nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', producto.img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)

   })
}

displayProductos(productos)

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = inputFiltro.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  