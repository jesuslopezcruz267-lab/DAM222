// 1. Función que retorna una Promesa para preparar una orden
function prepararPedido(platillo, tiempoMs, hayStock = true) {
  return new Promise((resolve, reject) => {
    console.log(`👨‍🍳 [COCINA] Orden recibida: "${platillo}". Iniciando preparación...`);

    // Simulación del tiempo que toma cocinar
    setTimeout(() => {
      if (hayStock) {
        resolve(`☕ [COCINA] ¡${platillo} listo para servir!`);
      } else {
        reject(`❌ [COCINA ERROR] No se pudo preparar "${platillo}". Sin insumos.`);
      }
    }, tiempoMs);
  });
}

// 2. Procesar pedidos de forma secuencial (uno tras otro) usando async/await
async function procesarMesaSecuencial() {
  console.log("--- MESA 1: Procesando pedido secuencial ---");
  try {
    const cafe = await prepararPedido("Café Americano", 2000, true);
    console.log(cafe);

    const croissant = await prepararPedido("Croissant de Jamón", 3000, true);
    console.log(croissant);

    console.log("🔔 [MESERO] Mesa 1 servida completamente.\n");
  } catch (error) {
    console.error(error);
  }
}

// 3. Procesar pedidos en paralelo (varias estaciones trabajando al mismo tiempo)
async function procesarMesaEnParalelo() {
  console.log("--- MESA 2: Procesando pedido en paralelo con Promise.all ---");
  try {
    // La cafetera y el horno trabajan simultáneamente
    const resultados = await Promise.all([
      prepararPedido("Espresso Doble", 1500, true),
      prepararPedido("Muffin de Arándanos", 2000, true)
    ]);

    resultados.forEach(res => console.log(res));
    console.log("🔔 [MESERO] Mesa 2 servida simultáneamente.\n");
  } catch (error) {
    console.error("Una de las preparaciones falló:", error);
  }
}

// Ejecución de la simulación
procesarMesaSecuencial();
procesarMesaEnParalelo();