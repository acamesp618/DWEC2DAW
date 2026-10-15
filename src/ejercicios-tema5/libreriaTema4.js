/*
 * PROGRAMA JAVASCRIPT: Calculadora de Media, Rango, Moda y Mediana.
 * Usa solo prompt() para la entrada y alert() para la salida.
 */

// --- MÓDULO DE ENTRADA DE DATOS ---

function solicitarValores() {
  const valores = [];
  let entrada = '';

  alert(
    "🚀 Calculadora Estadística 📊\n\nIntroduce valores enteros positivos (o cero) uno por uno.\nPulsa 'Cancelar' o deja el campo vacío y pulsa 'Aceptar' para finalizar la entrada.",
  );

  while (true) {
    entrada = prompt(
      `Valor #${valores.length + 1} (o pulsa Cancelar/Aceptar sin valor para finalizar):`,
    );

    if (entrada === null || entrada.trim() === '') {
      if (valores.length === 0) {
        alert('⚠️ Debes introducir al menos un valor para continuar.');
        continue;
      }
      break;
    }

    const numero = parseInt(entrada.trim(), 10);

    if (!isNaN(numero) && Number.isInteger(numero) && numero >= 0) {
      valores.push(numero);
    } else {
      alert(
        `⛔ Error: "${entrada}" no es un entero positivo (o cero) válido. Inténtalo de nuevo.`,
      );
    }
  }

  return valores;
}

// --- MÓDULOS DE CÁLCULO ESTADÍSTICO ---

function calcularMedia(arr) {
  if (arr.length === 0) return 0;

  let suma = 0;

  for (const valor of arr) {
    suma += valor;
  }

  return suma / arr.length;
}

function calcularRango(arr) {
  if (arr.length === 0) return 0;

  let min = arr[0];
  let max = arr[0];

  for (const valor of arr) {
    if (valor < min) {
      min = valor;
    }

    if (valor > max) {
      max = valor;
    }
  }

  return max - min;
}

function calcularModa(arr) {
  if (arr.length === 0) return 'No aplicable (serie vacía)';

  const frecuencias = {};
  let maxFrecuencia = 0;

  for (const valor of arr) {
    frecuencias[valor] = (frecuencias[valor] || 0) + 1;

    if (frecuencias[valor] > maxFrecuencia) {
      maxFrecuencia = frecuencias[valor];
    }
  }

  if (maxFrecuencia <= 1) {
    return 'No tiene moda.';
  }

  const candidatosModa = [];

  for (const valorStr in frecuencias) {
    if (frecuencias[valorStr] === maxFrecuencia) {
      candidatosModa.push(parseInt(valorStr, 10));
    }
  }

  if (candidatosModa.length === 1) {
    return candidatosModa[0].toString();
  }

  if (candidatosModa.length === 2) {
    candidatosModa.sort((a, b) => a - b);

    const [valor1, valor2] = candidatosModa;

    if (valor2 === valor1 + 1) {
      const modaCalculada = (valor1 + valor2) / 2;

      return `${valor1}, ${valor2} (adyacentes) -> Media: ${modaCalculada.toFixed(1)}`;
    } else {
      return `${valor1}, ${valor2}`;
    }
  }

  if (candidatosModa.length > 2) {
    return `Multimodal (más de 2 valores): ${candidatosModa.join(', ')}`;
  }

  return `Error en el cálculo de la moda (${candidatosModa.length} candidatos).`;
}

// --- NUEVA FUNCIÓN: MEDIANA ---

function calcularMediana(arr) {
  if (arr.length === 0) return 0;

  const valoresOrdenados = [...arr].sort((a, b) => a - b);

  const mitad = Math.floor(valoresOrdenados.length / 2);

  // Si hay un número impar de valores
  if (valoresOrdenados.length % 2 !== 0) {
    return valoresOrdenados[mitad];
  }

  // Si hay un número par de valores
  return (valoresOrdenados[mitad - 1] + valoresOrdenados[mitad]) / 2;
}

// --- FUNCIÓN PRINCIPAL DE EJECUCIÓN ---

function ejecutarAnalisisEstadistico() {
  const valores = solicitarValores();

  if (valores.length === 0) {
    alert('Programa finalizado sin datos para analizar.');
    return;
  }

  // Realizar los cálculos
  const media = calcularMedia(valores).toFixed(2);
  const rango = calcularRango(valores);
  const modaResultado = calcularModa(valores);
  const mediana = calcularMediana(valores);

  // Construir el mensaje de resultados
  const resultados = `
    ✅ Análisis Estadístico Finalizado ✅
    -------------------------------------------
    Serie de Valores (${valores.length} en total):
    [${valores.join(', ')}]
    -------------------------------------------
    1. Media (Promedio): 
       👉 ${media}

    2. Rango (Máx - Mín): 
       👉 ${rango}

    3. Moda: 
       👉 ${modaResultado}

    4. Mediana:
       👉 ${mediana}
    -------------------------------------------
    `;

  // Mostrar los resultados
  alert(resultados);
}
