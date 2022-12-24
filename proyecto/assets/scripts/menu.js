//MENU - TABLA DE PRECIOS
let menuPlatoPrincipal = [];
let menuAcompanamiento = [];
let menuBebidas = [];

class Producto {
  constructor(nombre, precio, id, img) {
    (this.nombre = nombre),
      (this.precio = precio),
      (this.id = id),
      (this.img = img);
  }
}

let alitas = menuPlatoPrincipal.push(new Producto("Alitas de Pollo", 900, "ALI", "../proyecto/assets/images/menu/wings.jpg"));
let pechuga = menuPlatoPrincipal.push(new Producto("Pechuga de Pollo", 1200, "PECH", "../proyecto/assets/images/menu/breast.jpg"));
let hamburg = menuPlatoPrincipal.push(new Producto("Hamburguesa de Pollo", 1500, "HAMB", "../proyecto/assets/images/menu/burger.jpg"));

let papas = menuAcompanamiento.push(new Producto("Papas Fritas", 500, "PAPAS", "../proyecto/assets/images/menu/fries.jpg"));
let arosCebolla = menuAcompanamiento.push(new Producto("Aros de Cebolla", 650, "AROS", "../proyecto/assets/images/menu/onionRings.jpg"));

let agua = menuBebidas.push(new Producto("Agua Mineral", 300, "AGUA", "../proyecto/assets/images/menu/water.jpg"));
let gaseosa = menuBebidas.push(new Producto("Gaseosa", 500, "GASEO", "../proyecto/assets/images/menu/soda.jpg"));
let cerveza = menuBebidas.push(new Producto("Porrón de Cerveza", 600, "CERV", "../proyecto/assets/images/menu/beer.jpg"));
