const edades = [21, 19, 34, 38, 27, 30, 25, 16];
console.log("Edades: "+ edades);

const calcularPromedio = (lista) => {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
};

console.log("El promedio de las edades es: " + calcularPromedio(edades));