export class Multiplica {
    multiplicar(a: number, b: number): string {
        let resultado = 0;
        let proceso = '';

        for (let i = 0; i < b; i++) {
            resultado = resultado + a;

            if (i === 0) {
                proceso = a.toString();
            } else {
                proceso = proceso + ' + ' + a.toString();
            }
        }

        proceso = proceso + ' = ' + resultado.toString();
        return proceso;
    }
}