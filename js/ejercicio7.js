let nombres=["Luciana","Sebastian","Ana","Bruno","Sofia","Luis","Melina"];

let nombreMasLargo= nombres[0];

for (let index = 1; index < nombres.length; index++) {
    if(nombres[index].length> nombreMasLargo.length){
        nombreMasLargo=nombres[index];
    }
    
}

console.log("El nombre mas largo es: " + nombreMasLargo);