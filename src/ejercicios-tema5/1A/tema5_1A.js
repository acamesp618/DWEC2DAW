// Función para solicitar las dimensiones, pedir los valores y llenar la matriz de 2D
function crearYLlenarMatriz() {
  let filas, columnas;

  // Pedir número de filas
  do {
    filas = prompt('Ingrese el número de FILAS para la matriz:');
  } while (
    filas === null ||
    filas.trim() === '' ||
    isNaN(filas) ||
    Number(filas) <= 0
  );

  // Pedir número de columnas
  do {
    columnas = prompt('Ingrese el número de COLUMNAS para la matriz:');
  } while (
    columnas === null ||
    columnas.trim() === '' ||
    isNaN(columnas) ||
    Number(columnas) <= 0
  );

  filas = Number(filas);
  columnas = Number(columnas);

  let matriz = [];

  // Solicitar cada valor para llenar la matriz según las dimensiones indicadas
  for (let i = 0; i < filas; i++) {
    matriz[i] = [];
    for (let j = 0; j < columnas; j++) {
      let valor;
      do {
        valor = prompt(`Ingrese el número para la posición [${i}][${j}]:`);
      } while (valor === null || valor.trim() === '' || isNaN(valor));

      matriz[i][j] = Number(valor);
    }
  }

  return matriz;
}

// Función para clasificar los números de la matriz en pares e impares
function clasificarParesImpares(matriz) {
  let pares = [];
  let impares = [];

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      let numero = matriz[i][j];
      if (numero % 2 === 0) {
        pares.push(numero);
      } else {
        impares.push(numero);
      }
    }
  }

  // Mostrar el resultado en un alert()
  alert(
    `Números Pares: [ ${pares.join(', ')} ]\nNúmeros Impares: [ ${impares.join(', ')} ]`,
  );
}

// Ejecución del script
let miMatriz = crearYLlenarMatriz();
clasificarParesImpares(miMatriz);
