//MENU - TABLA DE PRECIOS
class Producto {
  constructor(nombre, precio) {
    (this.nombre = nombre), (this.precio = precio);
  }
}

let alitas = new Producto("Alitas de Pollo", 900);
let pechuga = new Producto("Pechuga de Pollo", 1200);
let hamburg = new Producto("Hamburguesa de Pollo", 1500);
let papas = new Producto("Papas Fritas", 500);
let arosCebolla = new Producto("Aros de Cebolla", 650);
let agua = new Producto("Agua Mineral", 300);
let gaseosa = new Producto("Gaseosa", 500);
let cerveza = new Producto("Porrón de Cerveza", 600);

let totalPedido;

let confirmation; //CREACIÓN DE VARIABLE CONFIRMATION PARA FIN DEL BUCLE

//INICIO BUCLE DO WHILE PARA CONFIRMACIÓN DE PEDIDO AL FINAL DEL MISMO
do {
  //RESUMEN DE PEDIDO
  totalPedido = 0;
  let pedidoFinal = [];
  function showPedido() {
    console.log(
      "Su pedido actualmente se compone de: " + pedidoFinal.join(", ")
    );
  }

  //INICIO
  alert(
    "Bienvenido al sistema de pedidos de Los Pollos Hermanos. Para tomar su pedido, ingrese el código del producto deseado, que se encontrará entre paréntesis antes de la descripción del producto."
  );

  //PLATO PRINCIPAL
  let platoPrincipal;
  function getPlatoPrincipal() {
    do {
      platoPrincipal = prompt(
        "Elija su plato principal:\n\t•(ALI) - Alitas de pollo fritas x6 = $900\n\t•(PECH) - Pechuga de pollo crispy x2 = $1200\n\t•(HAMB) - Hamburguesa de pollo frita completa = $1500"
      ).toUpperCase();
      switch (platoPrincipal) {
        case "ALI":
          totalPedido = totalPedido + alitas.precio;
          pedidoFinal.push(alitas.nombre);
          break;
        case "PECH":
          totalPedido = totalPedido + pechuga.precio;
          pedidoFinal.push(pechuga.nombre);
          break;
        case "HAMB":
          totalPedido = totalPedido + hamburg.precio;
          pedidoFinal.push(hamburg.nombre);
          break;
        default:
          alert(
            "El código ingresado no corresponde a ningún producto del menú. Intente nuevamente"
          );
          break;
      }
    } while (
      platoPrincipal != "ALI" &&
      platoPrincipal != "PECH" &&
      platoPrincipal != "HAMB"
    );
  }

  getPlatoPrincipal();
  showPedido();
  console.log(
    "El precio total del pedido (Plato principal) es de: " +
      totalPedido.toString()
  );

  //ACOMPAÑAMIENTO
  let acompanamiento;
  function getAcompanamiento() {
    do {
      acompanamiento = prompt(
        "Elija su acompañamiento:\n\t•(PAPAS) - Porción de papas fritas = $500\n\t•(AROS) - Porción de aros de cebolla = $650\n\t•(SIN) - Sin acompañamiento"
      ).toUpperCase();
      switch (acompanamiento) {
        case "PAPAS":
          totalPedido = totalPedido + papas.precio;
          pedidoFinal.push(papas.nombre);
          break;
        case "AROS":
          totalPedido = totalPedido + arosCebolla.precio;
          pedidoFinal.push(arosCebolla.nombre);
          break;
        case "SIN":
          totalPedido = totalPedido + 0;
          pedidoFinal.push("Sin acompañamiento");
          break;
        default:
          alert(
            "El código ingresado no corresponde a ningún producto del menú. Intente nuevamente"
          );
          break;
      }
    } while (
      acompanamiento != "PAPAS" &&
      acompanamiento != "AROS" &&
      acompanamiento != "SIN"
    );
  }

  getAcompanamiento();
  showPedido();
  console.log(
    "El precio total del pedido (Plato principal + acompañamiento) es de: " +
      totalPedido.toString()
  );

  //BEBIDA
  let bebida;
  function getBebida() {
    do {
      bebida = prompt(
        "Elija su bebida:\n\t•(AGUA) - Agua mineral 500 ml = $300$\n\t•(GASEO) - Gaseosa 750 ml = $500\n\t•(CERV) - Porrón de cerveza = $600\n\t•(SIN) - Sin bebida"
      ).toUpperCase();
      switch (bebida) {
        case "AGUA":
          totalPedido = totalPedido + agua.precio;
          pedidoFinal.push(agua.nombre);
          break;
        case "GASEO":
          totalPedido = totalPedido + gaseosa.precio;
          pedidoFinal.push(gaseosa.nombre);
          break;
        case "CERV":
          totalPedido = totalPedido + cerveza.precio;
          pedidoFinal.push(cerveza.nombre);
          break;
        case "SIN":
          totalPedido = totalPedido + 0;
          pedidoFinal.push("Sin bebida");
          break;
        default:
          alert(
            "El código ingresado no corresponde a ningún producto del menú. Intente nuevamente"
          );
          break;
      }
    } while (
      bebida != "AGUA" &&
      bebida != "CERV" &&
      bebida != "GASEO" &&
      bebida != "SIN"
    );
  }

  getBebida();
  showPedido();
  console.log(
    "El precio total del pedido (Plato principal + acompañamiento + bebida) es de: " +
      totalPedido.toString()
  );

  //SUBTOTAL DE PEDIDO
  confirmation = prompt(
    "Su pedido final se compone de:\n\t" +
      pedidoFinal.join(".\n\t") +
      ".\n\nEl total de su pedido es de: $" +
      totalPedido.toString() +
      ".\n\nPara confirmar su pedido, escriba Y. Para cancelarlo y volver al inicio, escriba N"
  ).toLowerCase();
  while (confirmation != "y" && confirmation != "n") {
    alert("Error - El dato escrito no corresponde con alguna de las opciones");
    confirmation = prompt(
      "Su pedido final se compone de:\n\t" +
        pedidoFinal.join(".\n\t") +
        ".\n\nEl total de su pedido es de: $" +
        totalPedido.toString() +
        ".\n\nPara confirmar su pedido, escriba Y. Para cancelarlo y volver al inicio, escriba N"
    );
  }
} while (confirmation === "n");

//MÉTODO DE PAGO y DESCUENTO
alert(
  "Elija su método de pago a continuación. El pago en efectivo tendrá un 10% de descuento en su pedido final. El pago mediante transferencia bancaria tendrá un 5% de descuento en su pedido final."
);

let paymentOpt = ["efe", "transf", "tarj"];
let valorDescuento;
let metodoPago;
/*
function calcDescuento() {
  do {
    metodoPago = prompt(
      "Elija el método de pago:\n\t•(EFE) - Efectivo\n\t•(TRANSF) - Transferencia\n\t•(TARJ) - Tarjeta de crédito/débito"
    ).toLowerCase();
    if (metodoPago === paymentOpt[0]) {
      valorDescuento = 10;
    } else if (metodoPago === paymentOpt[1]) {
      valorDescuento = 5;
    } else if (metodoPago === paymentOpt[2]) {
      valorDescuento = 0;
    } else {
      alert("El método de pago elegido no es válido. Intente nuevamente.");
    }
  } while (paymentOpt.includes(metodoPago) === false);
  totalPedido = parseFloat(totalPedido * (1 - valorDescuento / 100)).toFixed(2);
}
*/

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
