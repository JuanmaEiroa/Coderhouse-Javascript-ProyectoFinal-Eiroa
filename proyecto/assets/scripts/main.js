/*

//MÉTODO DE PAGO y DESCUENTO
alert(
  "Elija su método de pago a continuación. El pago en efectivo tendrá un 10% de descuento en su pedido final. El pago mediante transferencia bancaria tendrá un 5% de descuento en su pedido final."
);

let paymentOpt = ["efe", "transf", "tarj"];
let valorDescuento;
let metodoPago;

function calcDescuento() {
  do {
    metodoPago = prompt(
      "Elija el método de pago:\n\t•(EFE) - Efectivo\n\t•(TRANSF) - Transferencia\n\t•(TARJ) - Tarjeta de crédito/débito"
    ).toLowerCase();
    let paymentSearch = paymentOpt.find((option) => option === metodoPago);
    if (paymentSearch === "efe") {
      valorDescuento = 10;
    } else if (paymentSearch === "transf") {
      valorDescuento = 5;
    } else if (paymentSearch === "tarj") {
      valorDescuento = 0;
    } else {
      alert("El método de pago elegido no es válido. Intente nuevamente.");
    }
  } while (paymentOpt.includes(metodoPago) === false);
  totalPedido = parseFloat(totalPedido * (1 - valorDescuento / 100)).toFixed(2);
}

calcDescuento();

console.log(
  "El precio total del pedido con el descuento es de: " + totalPedido.toString()
);

alert(
  "El precio total de su pedido es de $" +
    totalPedido.toString() +
    ".\nMuchas gracias por su compra!\n\nLos Pollos Hermanos"
);

//Code by Juan Manuel Eiroa :)


*/

let pedidoFinal = [];
let totalPedido = 0;

function addToPedido(menuType, id) {
  let menuSearch = menuType.find((element) => element.id === id);
  pedidoFinal.push(menuSearch.nombre);
  totalPedido += menuSearch.precio;
  alert("El producto se agregó a su pedido!");
}

//FUNCIONES PARA CREACIÓN DE CARDS CON EL MENÚ
function createCardsPlatoPrincipal(){
menuPlatoPrincipal.forEach((element) => {
    let menuCards = document.getElementsByClassName("platoPrincipal");
    let menuItemCard = document.createElement("div");
    menuItemCard.innerHTML = `
    <div class="col-12 text-center">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title"><strong>${element.nombre} - $${element.precio}</strong></h5>
          <img class="menuItem card-img img-fluid" src=${element.img}>
          <button type="button" class="btn btn-danger" id="add${element.id}">Añadir a mi pedido</button>
        </div>
      </div>
    </div>
    `
    menuCards[0].appendChild(menuItemCard);
    let addItemButton = document.getElementById("add"+element.id);
    addItemButton.addEventListener("click", function(){addToPedido(menuPlatoPrincipal, element.id)});
  });
}

function createCardsAcompanamiento(){
  menuAcompanamiento.forEach((element) => {
      let menuCards = document.getElementsByClassName("acompanamiento");
      let menuItemCard = document.createElement("div");
      menuItemCard.innerHTML = `
      <div class="col-12 text-center">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title"><strong>${element.nombre} - $${element.precio}</strong></h5>
            <img class="menuItem card-img img-fluid" src=${element.img}>
            <button type="button" class="btn btn-danger" id="add${element.id}">Añadir a mi pedido</button>
          </div>
        </div>
      </div>
      `
     menuCards[0].appendChild(menuItemCard);
     let addItemButton = document.getElementById("add"+element.id);
     addItemButton.addEventListener("click", function(){addToPedido(menuAcompanamiento, element.id)});
  });
}

function createCardsBebidas(){
  menuBebidas.forEach((element) => {
      let menuCards = document.getElementsByClassName("bebida");
      let menuItemCard = document.createElement("span");
      menuItemCard.innerHTML = `
      <div class="col-12 text-center">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title"><strong>${element.nombre} - $${element.precio}</strong></h5>
            <img class="menuItem card-img img-fluid" src=${element.img}>
            <button type="button" class="btn btn-danger" id="add${element.id}">Añadir a mi pedido</button>
          </div>
        </div>
      </div>
      `
     menuCards[0].appendChild(menuItemCard);
     let addItemButton = document.getElementById("add"+element.id);
     addItemButton.addEventListener("click", function(){addToPedido(menuBebidas, element.id)});
  });
  }

createCardsPlatoPrincipal();
createCardsAcompanamiento();
createCardsBebidas();