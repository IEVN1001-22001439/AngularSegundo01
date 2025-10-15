export class CalculosZodiaco {

    static calcularEdad(anioNacimiento: number): number {
        return new Date().getFullYear() - anioNacimiento;
    }

    static obtenerSignoChino(anio: number): string {
        const signos = ['Mono', 'Gallo', 'Perro', 'Cerdo', 'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra'];
        return signos[anio % 12];
    }

    static obtenerImagenSigno(signo: string): string {
        switch (signo) {
            case 'Rata': return '🐀';
            case 'Buey': return '🐂';
            case 'Tigre': return '🐯';
            case 'Conejo': return '🐰';
            case 'Dragón': return '🐉';
            case 'Serpiente': return '🐍';
            case 'Caballo': return '🐎';
            case 'Cabra': return '🐐';
            case 'Mono': return '🐵';
            case 'Gallo': return '🐔';
            case 'Perro': return '🐶';
            case 'Cerdo': return '🐷';
            default: return '❓';
        }
    }
}