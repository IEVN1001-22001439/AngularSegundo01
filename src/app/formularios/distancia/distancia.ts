export class Distancia {
    calcular(x1: number, y1: number, x2: number, y2: number): any {
        const diferenciaX = x2 - x1;
        const diferenciaY = y2 - y1;
        const distancia = Math.sqrt(diferenciaX * diferenciaX + diferenciaY * diferenciaY);

        return {
            distancia: distancia,
        };
    }
}