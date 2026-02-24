var Ciudadano = /** @class */ (function () {
    function Ciudadano(nombreCompleto, nacimiento) {
        this.nombreCompleto = nombreCompleto;
        this.nacimiento = nacimiento;
    }
    Ciudadano.prototype.obtenerEdadActual = function () {
        var fechaActual = new Date();
        var anios = fechaActual.getFullYear() - this.nacimiento.getFullYear();
        var aunNoCumple = fechaActual.getMonth() < this.nacimiento.getMonth() ||
            (fechaActual.getMonth() === this.nacimiento.getMonth() &&
                fechaActual.getDate() < this.nacimiento.getDate());
        if (aunNoCumple) {
            anios--;
        }
        return anios;
    };
    Ciudadano.prototype.determinarEtapa = function () {
        var edad = this.obtenerEdadActual();
        if (edad <= 2)
            return "Infante";
        if (edad <= 10)
            return "Niñez";
        if (edad <= 14)
            return "Pre-adolescencia";
        if (edad <= 17)
            return "Adolescencia";
        if (edad <= 30)
            return "Juventud";
        if (edad <= 50)
            return "Adultez";
        return "Persona Mayor";
    };
    Ciudadano.prototype.mostrarDatos = function () {
        var edad = this.obtenerEdadActual();
        var etapa = this.determinarEtapa();
        console.log("Nombre:", this.nombreCompleto);
        console.log("Edad actual:", edad, "años");
        console.log("Etapa de vida:", etapa);
    };
    return Ciudadano;
}());
// Ejemplo de uso
var ciudadano1 = new Ciudadano("Danis Ismael", new Date(2004, 9, 6));
ciudadano1.mostrarDatos();
