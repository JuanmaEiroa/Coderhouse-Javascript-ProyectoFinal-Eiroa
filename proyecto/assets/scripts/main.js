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
  Toastify({
    text: "El producto se agregó a tu pedido!",
    style: {
      background: "linear-gradient(to right, #c4182f, #a2182f)",
    },
  }).showToast();
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
  let pedidoFinalString =
    "Su pedido actual es:\n" +
    pedidoFinal.join("\n") +
    "\n\nEl costo final es de: $" +
    totalPedido.toString();
  if (pedidoFinal.length > 0) {
    Swal.fire({
      title: "Pedido Actual",
      html:
        "<u><b>Su pedido actual es:</u></b><br />" +
        pedidoFinal.join("<br />") +
        "<br /><br />El costo final es de: $" +
        totalPedido.toString(),
      imageUrl: "../proyecto/assets/images/logoalert.png",
      imageWidth: 200,
      imageHeight: 200,
      confirmButtonText: "Ok",
      color: "black",
    });
  } else {
    Swal.fire({
      title: "Error!",
      text: "Su pedido aún no contiene ningún producto",
      icon: "error",
      confirmButtonText: "Ok",
      color: "black",
    });
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
    Swal.fire({
      title: "Pedido vaciado!",
      text: "Su pedido ha sido vaciado",
      icon: "success",
      showConfirmButton: false,
      color: "black",
      timer: 2200,
    });
  } else {
    Swal.fire({
      title: "Error!",
      text: "Su pedido aún no contiene ningún producto",
      icon: "error",
      confirmButtonText: "Ok",
      color: "black",
    });
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

//CREACIÓN DE BOTÓN PARA CONFIRMAR PEDIDO ACTUAL Y DE OPCIONES DE PAGO
let pedidoConfirmed = false;

function createPaymOpt() {
  let paymentContainer = document.getElementById("paymentContainer");
  let paymentOptions = document.createElement("div");
  paymentOptions.setAttribute("id", "payment");
  paymentOptions.className = "col-5";
  paymentOptions.innerHTML = `
          <h2>Elija su método de pago</h2>
          <fieldset class="paymentOptions">
          <input type="radio" name="paymentOption" id="cash" value="cash">
          <label for="cash">Efectivo</label>
          <br/>
          <input type="radio" name="paymentOption" id="transfer" value="transfer">
          <label for="transfer">Transferencia</label>
          <br/>
          <input type="radio" name="paymentOption" id="creditDebitCard" value="creditDebitCard">
          <label for="creditDebitCard">Tarjeta de Crédito/Débito</label>
          </fieldset>
    `;
  paymentContainer.appendChild(paymentOptions);
}

let paymentStarted = false;
function confirmPedido() {
  pedidoFinal = JSON.parse(sessionStorage.getItem("pedidoFinal"));
  if (pedidoFinal.length > 0) {
    Swal.fire({
      title: "Pedido Confirmado!",
      html: "Su pedido ha sido confirmado. Elija su método de pago a continuación.<br/>•El pago en efectivo tendrá un 10% de descuento en su pedido final.<br/>•El pago mediante transferencia bancaria tendrá un 5% de descuento en su pedido final.",
      icon: "success",
      confirmButtonText: "Entendido",
      color: "black",
    });

    let pedidoConfirmed = true;

    let startPayment = (event) => {
      return new Promise((resolve, reject) => {
        event ? resolve("Pedido confirmado") : reject("Pedido no confirmado");
      });
    };

    startPayment(pedidoConfirmed)
      .then((response) => {
        console.log(response);
        createPaymOpt();
        paymentStarted = true;
      })
      .catch((error) => {
        console.log(error);
      });
    
      
  } else {
    Swal.fire({
      title: "Error!",
      text: "Su pedido aún no contiene ningún producto",
      icon: "error",
      confirmButtonText: "Ok",
      color: "black",
    });
  }
}

//METODO DE PAGO Y DESCUENTO

let valorDescuento;
function calcDescuento() {
  if (document.getElementById("cash").checked) {
    valorDescuento = 10;
  } else if (document.getElementById("transfer").checked) {
    valorDescuento = 5;
  } else {
    valorDescuento = 0;
  }
  totalPedido = parseFloat(totalPedido * (1 - valorDescuento / 100)).toFixed(2);
}

function createDiscountPrice(){
  let paymentContainer = document.getElementById("paymentContainer");
  let discountDetails = document.createElement("div");
  discountDetails.setAttribute("id", "discountDetails");
  discountDetails.className = "col-4";
  discountDetails.innerHTML = `
  <h3>Su descuento es de: ${valorDescuento.toString()}%</h3>
  <br />
  <p>El precio final de su pedido (con descuento) es de $${totalPedido.toString()}</p>
  <p>Muchas gracias por su compra!</p>
  <p>Los Pollos Hermanos</p>
    `;
  paymentContainer.appendChild(discountDetails);
}

function discount() {
  let getDiscount = (event) => {
    return new Promise((resolve, reject) => {
      event
        ? resolve("Método de pago confirmado")
        : reject("Método de pago no confirmado");
    });
  };

  getDiscount(paymentStarted)
    .then((response) => {
      console.log(response);
      calcDescuento();
      createDiscountPrice();
    })
    .catch((error) => {
      console.log(error);
    });
}

let buttonConfirmPedido = document.getElementById("buttonConfirmPedido");
buttonConfirmPedido.addEventListener("click", function () {
  confirmPedido();
});

//Code by Juan Manuel Eiroa :)