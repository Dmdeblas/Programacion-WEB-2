var productos = [
    { nombre: 'Camisa', precio: 300 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Sombrero', precio: 200 }
];

var carrito = [];

function mostrarProductos() {
    console.log("Productos disponibles:");
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    });
}

function agregarAlCarrito(indice) {
    if (indice > 0 && indice <= productos.length) {
        carrito.push(productos[indice - 1]);
        console.log(`${productos[indice - 1].nombre} agregado al carrito.`);
    } else {
        console.log("Producto no válido.");
    }
}

function mostrarCarrito() {
    console.log("Carrito:");
    carrito.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    });
    let total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    console.log(`Total: $${total}`);
}

mostrarProductos();
agregarAlCarrito(1); 
agregarAlCarrito(3); 
mostrarCarrito();

// Moctezuma López Brayan Daniel