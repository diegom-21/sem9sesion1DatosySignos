// NUMEROS
const banana = 30.5;
const orange = 10;
const apple = 15.5;

console.log("Banana:", banana);
console.log("Orange:", orange);
console.log("Apple:", apple);

// Pago total
const totalCost = banana + orange + apple;
console.log("Costo total sin descuento:", totalCost);

// Descuento del pago total del 30%
const discount = totalCost * 0.3;
console.log("Valor del descuento del 30%:", discount);

// Costo final aplicado el descuento
const finalCost = totalCost - discount;
console.log("Costo final aplicado el descuento:", finalCost);
