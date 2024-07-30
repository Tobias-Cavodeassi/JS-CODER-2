const productos = [];

class Componente{
    constructor(id, tipo, modelo, marca, precio){
        this.id= id;
        this.tipo= tipo;
        this.modelo= modelo;
        this.marca= marca;
        this.precio= precio;
    }
}
const primerComponente = new Componente("1", "Placa de video", "AMD RX 7600", "ASUS", 395000);
const segundoComponente = new Componente("2", "Procesador", "AMD Ryzen 5 5600x", "AMD", 275000);
const tercerComponente = new Componente("3", "Motherboard", "ASUS PRIME B550", "ASUS", 137300);
const cuartoComponente = new Componente("4", "Disco Sólido", "WD Black SN770", "Western Digital", 78810);
const quintoComponente = new Componente("5", "Memoria RAM", "Fury Beast", "Kingston", 29900);
productos.push(primerComponente);
productos.push(segundoComponente);
productos.push(tercerComponente);
productos.push(cuartoComponente);
productos.push(quintoComponente);

console.log(productos);

for(let i = 0; i < productos.length; i++){
    console.log(productos[i]);
};


let salir = true;

do{
    let confirmacion = confirm("Desea agregar otro producto?");
    
    if(confirmacion){
        const sextoComponente = new Componente("6", prompt("Ingrese el tipo de componente o periférico"), prompt("Ingrese el modelo"), prompt("Ingrese la marca"), prompt("Ingrese el precio"));
        productos.push(sextoComponente);

        console.log(productos);

        for(let i = 0; i < productos.length; i++){
            console.log(productos[i]);
        };
    } else {
        alert("¡Gracias por visitarnos!")
        salir = false;
    }
}while(salir)

alert("Este es tu carrito:")
productos.forEach(el => {
    alert("Producto " + el.id + ": " + el.tipo + " " + el.marca + " " + el.modelo + " de $" + el.precio)
});

const precioFinal = productos.reduce((total, producto) => total + producto.precio, 0);
alert("Total $" + precioFinal);
console.log("Total $", precioFinal);