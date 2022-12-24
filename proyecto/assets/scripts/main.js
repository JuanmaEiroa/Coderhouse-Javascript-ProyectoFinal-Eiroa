//CREACIÓN DE VARIABLES PARA PEDIDO Y TOTAL, CON ALMACENAMIENTO EN STORAGE
let pedidoFinal = [];
let totalPedido = 0;
let pedidoFinalJSON;
let totalPedidoJSON;

//DECLARACIÓN DE FUNCIÓN PARA AGREGAR ITEM A PEDIDO
function addToPedido(menuType, id) {
  let menuSearch = menuType.find((element) => element.id === id);
  pedidoFinal.push(menuSearch.nombre);
  totalPedido += menuSearch.precio;
  alert("El producto se agregó a su pedido!");
  pedidoFinalJSON = JSON.stringify(pedidoFinal);
  totalPedidoJSON = JSON.stringify(totalPedido);
  sessionStorage.setItem("pedidoFinal", pedidoFinalJSON);
  sessionStorage.setItem("totalPedido", totalPedidoJSON);
}

//DECLARACIÓN Y LLAMADO DE FUNCIONES PARA CREACIÓN DE CARDS CON EL MENÚ
function createCardsPlatoPrincipal() {
  menuPlatoPrincipal.forEach((element) => {
    let menuCards = document.getElementsByClassName("platoPrincipal");
    let menuItemCard = document.createElement("div");
    menuItemCard.innerHTML = `
    <div class="col-12 text-center">
      <div class="card text-center">
        <div class="card-body">
          <h4 class="card-title"><strong>${element.nombre} - $${element.precio}</strong></h5>
          <img class="menuItem card-img img-fluid" src=${element.img}>
          <br>
          <br>
          <button type="button" class="btn btn-danger" id="add${element.id}">Añadir a mi pedido</button>
        </div>
      </div>
    </div>
    <br>
    `;
    menuCards[0].appendChild(menuItemCard);
    let addItemButton = document.getElementById("add" + element.id);
    addItemButton.addEventListener("click", function () {
      addToPedido(menuPlatoPrincipal, element.id);
    });
  });
}

function createCardsAcompanamiento() {
  menuAcompanamiento.forEach((element) => {
    let menuCards = document.getElementsByClassName("acompanamiento");
    let menuItemCard = document.createElement("div");
    menuItemCard.innerHTML = `
      <div class="col-12 text-center">
        <div class="card text-center">
          <div class="card-body">
            <h4 class="card-title"><strong>${element.nombre} - $${element.precio}</strong></h5>
            <img class="menuItem card-img img-fluid" src=${element.img}>
            <br>
            <br>
            <button type="button" class="btn btn-danger" id="add${element.id}">Añadir a mi pedido</button>
          </div>
        </div>
      </div>
      <br>
      `;
    menuCards[0].appendChild(menuItemCard);
    let addItemButton = document.getElementById("add" + element.id);
    addItemButton.addEventListener("click", function () {
      addToPedido(menuAcompanamiento, element.id);
    });
  });
}

function createCardsBebidas() {
  menuBebidas.forEach((element) => {
    let menuCards = document.getElementsByClassName("bebida");
    let menuItemCard = document.createElement("span");
    menuItemCard.innerHTML = `
      <div class="col-12 text-center">
        <div class="card text-center">
          <div class="card-body">
            <h4 class="card-title"><strong>${element.nombre} - $${element.precio}</strong></h5>
            <img class="menuItem card-img img-fluid" src=${element.img}>
            <br>
            <br>
            <button type="button" class="btn btn-danger" id="add${element.id}">Añadir a mi pedido</button>
          </div>
        </div>
      </div>
      <br>
      `;
    menuCards[0].appendChild(menuItemCard);
    let addItemButton = document.getElementById("add" + element.id);
    addItemButton.addEventListener("click", function () {
      addToPedido(menuBebidas, element.id);
    });
  });
}

createCardsPlatoPrincipal();
createCardsAcompanamiento();
createCardsBebidas();

//CREACIÓN DE BOTÓN Y FUNCIÓN PARA VER PEDIDO ACTUAL
function showPedido() {
  pedidoFinal = JSON.parse(sessionStorage.getItem("pedidoFinal"));
  totalPedido = JSON.parse(sessionStorage.getItem("totalPedido"));
  if (pedidoFinal.length > 0) {
    alert(
      "Su pedido actual es:\n" +
        pedidoFinal.join("\n") +
        "\n\nEl costo final es de: $" +
        totalPedido.toString()
    );
  } else {
    alert("Su pedido aún no contiene ningún producto");
  }
}

let buttonVerPedido = document.getElementById("buttonVerPedido");
buttonVerPedido.addEventListener("click", function () {
  showPedido();
});

//CREACIÓN DE BOTÓN PARA LIMPIAR PEDIDO ACTUAL
function clearPedido() {
  pedidoFinal = JSON.parse(sessionStorage.getItem("pedidoFinal"));
  totalPedido = JSON.parse(sessionStorage.getItem("totalPedido"));
  if (pedidoFinal.length > 0) {
    pedidoFinal.splice(0, pedidoFinal.length);
    totalPedido = 0;
    alert("Su pedido ha sido vaciado");
  } else {
    alert("Su pedido aún no contiene ningún producto");
  }
  pedidoFinalJSON = JSON.stringify(pedidoFinal);
  totalPedidoJSON = JSON.stringify(totalPedido);
  sessionStorage.setItem("pedidoFinal", pedidoFinalJSON);
  sessionStorage.setItem("totalPedido", totalPedidoJSON);
}

let buttonClearPedido = document.getElementById("buttonClearPedido");
buttonClearPedido.addEventListener("click", function () {
  clearPedido();
});

//CREACIÓN DE BOTÓN PARA CONFIRMAR PEDIDO ACTUAL
function confirmPedido() {
  pedidoFinal = JSON.parse(sessionStorage.getItem("pedidoFinal"));
  if (pedidoFinal.length > 0) {
    alert(
      "Su pedido ha sido confirmado. Elija su método de pago a continuación.\nEl pago en efectivo tendrá un 10% de descuento en su pedido final.\nEl pago mediante transferencia bancaria tendrá un 5% de descuento en su pedido final."
    );

    //MÉTODO DE PAGO y DESCUENTO
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
      totalPedido = parseFloat(
        totalPedido * (1 - valorDescuento / 100)
      ).toFixed(2);
    }

    calcDescuento();

    console.log(
      "El precio total del pedido con el descuento es de: " +
        totalPedido.toString()
    );

    alert(
      "El precio total de su pedido es de $" +
        totalPedido.toString() +
        ".\nMuchas gracias por su compra!\n\nLos Pollos Hermanos"
    );
  } else {
    alert("Su pedido aún no contiene ningún producto");
  }
}

let buttonConfirmPedido = document.getElementById("buttonConfirmPedido");
buttonConfirmPedido.addEventListener("click", function () {
  confirmPedido();
});

//Code by Juan Manuel Eiroa :)