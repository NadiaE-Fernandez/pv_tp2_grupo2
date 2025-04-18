export const colores = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#16A085'];

let indice = 0;

export function changeBackgroundColor() {
  const color = colores[indice];
  indice++;
  if (indice >= colores.length) {
    indice = 0;
  }
  return color;
}
