class Ciudadano {

    private nombreCompleto: string;
    private nacimiento: Date;

    constructor(nombreCompleto: string, nacimiento: Date) {
        this.nombreCompleto = nombreCompleto;
        this.nacimiento = nacimiento;
    }

    obtenerEdadActual(): number {
        const fechaActual = new Date();

        let anios = fechaActual.getFullYear() - this.nacimiento.getFullYear();

        const aunNoCumple =
            fechaActual.getMonth() < this.nacimiento.getMonth() ||
            (fechaActual.getMonth() === this.nacimiento.getMonth() &&
             fechaActual.getDate() < this.nacimiento.getDate());

        if (aunNoCumple) {
            anios--;
        }

        return anios;
    }

    determinarEtapa(): string {
        const edad = this.obtenerEdadActual();

        if (edad <= 2) return "Infante";
        if (edad <= 10) return "Niñez";
        if (edad <= 14) return "Pre-adolescencia";
        if (edad <= 17) return "Adolescencia";
        if (edad <= 30) return "Juventud";
        if (edad <= 50) return "Adultez";

        return "Persona Mayor";
    }

    mostrarDatos(): void {
        const edad = this.obtenerEdadActual();
        const etapa = this.determinarEtapa();

        console.log("Nombre:", this.nombreCompleto);
        console.log("Edad actual:", edad, "años");
        console.log("Etapa de vida:", etapa);
    }
}

// Ejemplo de uso
const ciudadano1 = new Ciudadano("Danis Ismael", new Date(2004, 9, 6));
ciudadano1.mostrarDatos();